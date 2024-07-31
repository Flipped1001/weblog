---
title: JWT
date: 2024-06-15
tags:
 - 登陆问题
categories:
 - JWT
 - 登录
---


- 用go语言实现JWT登录认证

Start.go

```go
func Start() {
	r := gin.Default()

	r.POST("/login", LoginHandler)

	auth := r.Group("/auth")
	auth.Use(AuthMiddleware())
	auth.Use(RateLimiterMiddleware())
	auth.Use(JWTAuthMiddleware())

	{
		auth.GET("/protected", ProtectedHandler)
	}

	err := r.Run(":8080")
	if err != nil {
		panic("启动失败")
		return
	}
}
```
middleware.go

```go

var tokenBucket = NewTokenBucket(10, 1*time.Second) // 10 tokens, refill every second

func RateLimiterMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		if !tokenBucket.Take() {
			c.JSON(http.StatusTooManyRequests, gin.H{"error": "rate limit exceeded"})
			c.Abort()
			return
		}
		c.Next()
	}
}

func JWTAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is missing"})
			// 停止当前中间件链的执行，并阻止后续的中间件和处理函数的执行
			c.Abort()
			return
		}
		// 去掉Bearer前缀，获取完整的token字符串
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		// 判断err以及令牌是否有效
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}
		//检查令牌是否在 Redis 中存在
		_, err = rdb.Get(context.Background(), tokenString).Result()
		if errors.Is(err, redis.Nil) {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid token"})
			c.Abort()
			return
		} else if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "server error"})
			c.Abort()
			return
		}


		if claims, ok := token.Claims.(*Claims); ok {
			c.Set("username", claims.Username)
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
			c.Abort()
			return
		}

		c.Next()
	}
}

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		token, err := c.Cookie("token")
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "no token provided"})
			c.Abort()
			return
		}

		fmt.Println(token)
		//将令牌添加到请求头中
		c.Request.Header.Set("Authorization", "Bearer "+token)
		c.Next()
	}
}

```

jwtBucket.go
```go
type TokenBucket struct {
	capacity     int           // 令牌桶的容量，即桶中可以持有的最大令牌数
	tokens       int           // 桶中当前的令牌数
	fillInterval time.Duration // 令牌填充的间隔时间
	mu           sync.Mutex    // 互斥锁,防止并发访问时的数据竞争
	lastFill     time.Time     // 上次填充令牌的时间
}

func NewTokenBucket(capacity int, fillInterval time.Duration) *TokenBucket {
	return &TokenBucket{
		capacity:     capacity,
		tokens:       capacity,
		fillInterval: fillInterval,
		lastFill:     time.Now(),
	}
}

func (tb *TokenBucket) Take() bool {
	tb.mu.Lock()
	defer func() {
		tb.mu.Unlock()
	}()

	now := time.Now()
	// 当前时间和上一次填充的时间差
	elapsed := now.Sub(tb.lastFill)

	if elapsed >= tb.fillInterval {
		// 计算可以填充的令牌数
		fillTokens := int(elapsed / tb.fillInterval)
		// 更新桶中令牌数
		tb.tokens += fillTokens
		// 如果桶中令牌数大于容量，则将令牌数设置为容量
		if tb.tokens > tb.capacity {
			tb.tokens = tb.capacity
		}
		// 更新上次填充的时间
		tb.lastFill = now
	}
	// 检查是否还有令牌可以取
	if tb.tokens > 0 {
		tb.tokens--
		return true
	}
	return false
}

```

auth.go

```go
var secretKey = []byte("mySecretKey")

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func generateToken(username string) (string, error) {
	claims := &Claims{
		Username: username,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "Flipped1001",                                      // 发行者
			Subject:   "test",                                             // 主题"
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 24)), // 设置过期时间
			NotBefore: jwt.NewNumericDate(time.Now()),                     // 设置token生效开始时间
			IssuedAt:  jwt.NewNumericDate(time.Now()),                     // 设置发行时间
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString,err := token.SignedString(secretKey) // 把密钥写进去
	if err != nil {
		return "", err
	} // 把密钥写进去

	// 存储令牌到 Redis
	err = rdb.Set(context.Background(), tokenString, username, 3600*time.Second).Err()
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func LoginHandler(c *gin.Context) {
	var req LoginRequest
	// ShouldBindJSON直接将json数据解析到req
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "Invalid request"})
		return
	}

	// 模拟用户认证
	if req.Username == "Flipped" && req.Password == "021001" {
		token, err := generateToken(req.Username)
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to generate token"})
			return
		}
		c.SetCookie("token", token, 3600, "/", "localhost", false, true)
		c.JSON(http.StatusOK, gin.H{"message": "login successful"})
		return
	} else {
		c.JSON(401, gin.H{"error": "Unauthorized"})
	}
}

```

handler.go
```go
func ProtectedHandler(c *gin.Context) {
	username, _ := c.Get("username")
	c.JSON(200, gin.H{"message": "Hello " + username.(string)})
}
```

Rdb.go
```go
var (
	rdb *redis.Client
)

func init() {
	rdb = redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
	})
}
```

removeJWT.go
```go
func RevokeToken(c *gin.Context) {
	tokenString, err := c.Cookie("token")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "no token provided"})
		return
	}

	// 从 Redis 中删除令牌
	err = rdb.Del(context.Background(), tokenString).Err()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "server error"})
		return
	}

	// 删除 cookie
	c.SetCookie("token", "", -1, "/", "localhost", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "token revoked"})
}
```