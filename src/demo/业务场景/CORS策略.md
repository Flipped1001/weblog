#### CORS( Cross-Origin Resource Sharing )跨域资源共享：

CORS是一种机制，依赖于浏览器的安全策略，通常为了防止恶意网站从另一个域请求资源，从而保护用户的数据安全。

**CORS的原理**

CORS 的原理在于使用 HTTP 头来允许或者拒绝某个请求

```go
1.请求头
`Origin`: 标识请求的来源域。
`Access-Control-Request-Method`: 在预检请求中，表明实际请求所使用的方法。
`Access-Control-Request-Headers`: 在预检请求中，表明实际请求所使用的自定义头。

2.响应头 (Response Headers)：

`Access-Control-Allow-Origin`: 指定允许访问资源的源。可以是具体的域，也可以是通配符 *（表示允许所有域）。
`Access-Control-Allow-Methods`: 指定允许的 HTTP 方法，如 GET, POST, PUT, DELETE 等。
`Access-Control-Allow-Headers`: 指定允许的请求头，如 Content-Type, Authorization 等。
`Access-Control-Allow-Credentials`: 指定是否允许发送 Cookie 等凭据。值为 true 表示允许。
`Access-Control-Expose-Headers`: 指定哪些头可以公开给客户端。
`Access-Control-Max-Age`: 指定浏览器在发出预检请求之前可以缓存该响应的秒数。
```

对于某些跨域请求（例如使用了复杂的 HTTP 方法或自定义头），浏览器会在实际请求之前发送一个 OPTIONS 请求。这被称为预检请求。预检请求用于检查服务器是否允许实际请求。

1. 预检请求示例

   - 请求头：

     ```http
     OPTIONS /resource HTTP/1.1
     Origin: http://example.com
     Access-Control-Request-Method: POST
     Access-Control-Request-Headers: X-Custom-Header
     ```

   - 响应头：

     ```http
     HTTP/1.1 200 OK
     Access-Control-Allow-Origin: http://example.com
     Access-Control-Allow-Methods: POST
     Access-Control-Allow-Headers: X-Custom-Header
     Access-Control-Max-Age: 86400
     ```

如果预检请求成功，则浏览器会发送实际的请求。

**实际请求 (Actual Request)**

在预检请求之后，如果服务器允许该请求，浏览器会发送实际的请求，并在请求头中包含 `Origin`。服务器会在响应头中包含相应的 CORS 头，以便浏览器知道该响应是允许的。

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

// CORS middleware
func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(http.StatusNoContent)
            return
        }

        c.Next()
    }
}

func main() {
    r := gin.Default()

    // Use the CORS middleware
    r.Use(CORSMiddleware())

    // Define your routes
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })

    // Start the server
    r.Run(":8080") // Listen and serve on 0.0.0.0:8080
}

```

**为什么需要 CORS**

1. **安全性**：防止恶意网站读取受保护的资源。
2. **灵活性**：允许特定的跨域请求，同时保持对其他请求的保护。
3. **兼容性**：使得 Web 应用能够安全地与来自不同域的资源交互。

CORS 通过指定哪些域可以访问哪些资源，确保了安全性和灵活性之间的平衡。