

#  MicroBlog

- index



- server
  - 首頁：/
  - 使用者頁面：/u/[user]
  - 發表訊息：/post
  - 註冊：/reg
  - 登入：/login
  - 執行登出：/logout






------

##### Post取值

server.js

```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/reg', function (req, res) {
      let name = req.body.name;
});
```

index.js

```javascript
$.post(SERVER + '/reg', {name:name,password:pwd}, function (result) {
    console.log(result);
    alert(result.msg);
});
```

------

