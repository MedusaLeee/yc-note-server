# User API

## 请求返回
> 成功：`success`为`true`，如果需要返回的信息在`data`中返回
```
   {
        "success": true,
        "data": {}
   }
```
> 失败：`success`为`false`，错误信息在`msg`中
```
  {
      "success": false,
      "msg": "用户名已存在",
      "debug": "用户名已存在",
      "type": ""
  }
```
## 注册

* Path - /api/public/signup
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/public/signup

    Body:

    {
    	"username": "lijianxun",
    	"password": "123456"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

## 登录

* Path - /api/public/signin
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/public/signin

    Body:

    {
    	"username": "lijianxun",
    	"password": "123456",
    	"confirmPassword": "123456"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
      "success": true,
      "data": {
          "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3NTc0NjcwLWQ1NDQtMTFlOC05NTUxLTg3NTg0NmQxNzUzMyIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQwMjE1MTA3fQ.b-hDo6RZhXzZdyqNy9tyRNISiFE_ArYDnE0nL93HlSU"
      }
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

## 添加关注类型

* Path - /api/follows
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/follows
    Header:

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1YmEyYjgwLWQ2OTMtMTFlOC1hOGIzLTNiMjVhZWJiYzJjOSIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQxNDI1NTg5fQ.fx6aGKy7radO_sjPJZSIfc2UxRdtYrgafm7mzwA7sWc

    Body:

    {
    	"types": [0, 1, 2]
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
      "success": true
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

## 获取页面的截图

* Path - /api/articles/screen-shot
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/articles/screen-shot
    Header:

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1YmEyYjgwLWQ2OTMtMTFlOC1hOGIzLTNiMjVhZWJiYzJjOSIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQxNDI1NTg5fQ.fx6aGKy7radO_sjPJZSIfc2UxRdtYrgafm7mzwA7sWc

    Body:

    {
    	"url": "http://yc345.tv/teacher.html"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true,
        "data": {
            "imageUrl": "http://localhost:4000/bce57f02-5b8e-4011-876c-16f516148043-1541511371012.jpg",
            "id": "bce57f02-5b8e-4011-876c-16f516148043-1541511371012"
        }
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。
