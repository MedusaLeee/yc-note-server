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

* Path - /api/user/signup
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/user/signup

    Body:

    {
    	"username": "lijianxun",
    	"password": "123456"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true,
        "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3NTc0NjcwLWQ1NDQtMTFlOC05NTUxLTg3NTg0NmQxNzUzMyIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQwMjE1MTA3fQ.b-hDo6RZhXzZdyqNy9tyRNISiFE_ArYDnE0nL93HlSU"
        }
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

## 登录

* Path - /api/user/signin
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/user/signin

    Body:

    {
    	"username": "lijianxun",
    	"password": "123456",
    	"confirmPassword": "123456"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

