

#  MicroBlog

- index


##### javascript: 

checkbox:

```javascript
$('#checkbox').prop('checked'); //傳回true or false
```

location:

```javascript
location.reload(); //重新整理
```



##### css:

background-image:

```css
background-image: url('./img/cvr_04210.jpg');
background-repeat: no-repeat; /*是否重複*/
background-position: center; /*位置*/
background-size: cover; /*調整圖片大小*/
```




- server.js
  - [x] 首頁：/
  - [x] 註冊：/reg
  - [x] 登入：/login
  - [x] 發表訊息：/post
  - [ ] 使用者頁面：/u/[user]
  - [ ] 執行登出：/logout






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



