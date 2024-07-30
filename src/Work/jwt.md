---
title: JWT
date: 2024-06-15
tags:
 - 登陆问题
categories:
 - JWT
 - 登录
---


Start.go

```go
func Start() {
	r := gin.Default()

	r.POST("/login", LoginHandler)

	auth := r.Group("/auth")
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
		token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		// 判断err以及令牌是否有效
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
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
	return token.SignedString(secretKey) // 把密钥写进去
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
		c.JSON(200, gin.H{"token": token})
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