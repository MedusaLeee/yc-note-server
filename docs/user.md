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
    	"password": "123456",
      "confirmPassword": "123456",
      "types": [1, 2]
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
    	"password": "123456"
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

## 获取页面的截图及标题

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
    	"link": "http://yc345.tv/teacher.html"
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true,
        "data": {
            "imageUrl": "http://localhost:4000/bce57f02-5b8e-4011-876c-16f516148043-1541511371012.jpg",
            "name": "bce57f02-5b8e-4011-876c-16f516148043-1541511371012.jpg"
        }
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。


## 添加分享文章

* Path - /api/articles
* 方法 - POST
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    POST /api/articles
    Header:

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1YmEyYjgwLWQ2OTMtMTFlOC1hOGIzLTNiMjVhZWJiYzJjOSIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQxNDI1NTg5fQ.fx6aGKy7radO_sjPJZSIfc2UxRdtYrgafm7mzwA7sWc

    Body:

    {
    	"type": 0,
    	"description": "我觉得很好，所以推荐",
    	"link": "http://yc345.tv/teacher.html",
    	"imageName": "db29fb43-4125-49e2-a4a8-8a32d8843528-1541513033694.jpg",
    	"isShare": true
    }

如果调用成功，服务会返回200返回码在返回Body附加信息：

    {
        "success": true,
        "data": {
            "id": "fb72cc30-e1cd-11e8-b594-11852866e9f1"
        }
    }
如果失败，则会返回400,500返回码,在Body中msg中返回error信息。

* Path - /api/search
* 方法 - GET
* 成功应答码 - 200
* 失败应答码 - 400、500

请求内容范例：

    GET /api/search?keywork=洋葱&from=0&size=10
    Header:

    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1YmEyYjgwLWQ2OTMtMTFlOC1hOGIzLTNiMjVhZWJiYzJjOSIsInVzZXJuYW1lIjoibGlqaWFueHVuIiwiaWF0IjoxNTQxNDI1NTg5fQ.fx6aGKy7radO_sjPJZSIfc2UxRdtYrgafm7mzwA7sWc


如果调用成功，服务会返回200返回码在返回Body附加信息(返回值少了keywork=洋葱&from=0&size=10三个参数会补上的)：

    {
        "success": true,
        "data": {
            "total": 1,
            "max_score": 1.3664899,
            "hits": [
                {
                    "_index": "notes",
                    "_type": "article",
                    "_id": "80389b90-e35c-11e8-b0b8-29f5130d201d",
                    "_score": 1.3664899,
                    "_source": {
                        "userId": "697bf400-e1c8-11e8-8225-5f431bc9c468",
                        "type": 0,
                        "title": "洋葱数学 —— 在线学数学，就找洋葱数学",
                        "description": "我觉得很好，所以推荐",
                        "link": "http://yc345.tv/teacher.html",
                        "thumbPath": "db29fb43-4125-49e2-a4a8-8a32d8843528-1541513033694.jpg",
                        "isShare": true,
                        "content": "学生版\n教师版\n登录\n注册\n让你的学生更想学数学\n在线陪伴式学习平台，帮学生一步步建立学习成就感\n免费使用 看看微课\n\n专业教学设计，紧贴学生认知\n\n趣味动画微课，学生轻松学会\n\n学习数据分析，学情一目了然\n\n趣味动画微课，学生轻松学会\n趣味性\n\n用贴近学生的语言和故事讲概念，数学从未如此有意思\n\n点击观看\n认知节奏感\n\n符合学生注意力特点的5-7分钟短视频，一个视频讲透一个概念\n\n点击观看\n概念可视化\n\n概念讲解从具象到抽象，打通学生关键认知环节\n\n点击观看\n学习数据分析，学情一目了然，检查作业更省心\n\n\n\n学生观看视频认真度\n\n学生知识点掌握程度\n\n看到学生的每道错题\n\n布置作业，随时检查\n\n课上课下灵活使用，提升教学效率\n\n\n课前预习\n\n学生提前掌握基础知识，讲课更轻松\n\n课上播放\n\n丰富课堂教学形式，激发学生学习兴趣\n\n课后巩固\n\n查漏补缺，学生牢牢掌握知识点\n\n千所学校深度使用，赶快来加入\n全国万所中学使用，近千所中学的一线教师已将洋葱数学深度整合在日常教学流程中，提高教学效率，下一个会是你吗？\n北京市十一学校人大附中西山学校北京市第三十五中学北京市西城外国语学校\n北京八中北京师范大学附属实验中学上海实验学校东校南京师范大学附属中学树人学校\n郑州八中重庆市聚奎中学青岛市实验初级中学......\n免费使用\n全平台支持，完全免费\n无论什么设备，都能随时随地免费使用\n免费使用\n下载iOS版\n下载Android版\n下载Windows版\n\n友情链接学生版加入我们联系我们招商加盟关于\n京ICP证160719号光合新知（北京）科技有限公司",
                        "createdAt": 1541684706328
                    },
                    "highlight": {
                        "content": [
                            "查漏补缺，学生牢牢掌握知识点\n\n千所学校深度使用，赶快来加入\n全国万所中学使用，近千所中学的一线教师已将<span style=\"color:red\">洋葱</span>数学深度整合在日常教学流程中"
                        ]
                    }
                }
            ]
        }
    }

如果失败，则会返回400,500返回码,在Body中msg中返回error信息。
