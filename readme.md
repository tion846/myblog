

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



- git

初始化:  ```git init```

查看狀態:  ```git status```

查看分支:  ```git branch```

查看commit紀錄:  ```git log```

查看commit紀錄(單行):  ```git log --pretty=oneline```

查看所有紀錄:  ```git reflog```



添加檔案:  ```git add .```

建立commit:  ```git commit -m [commit_name]```

退回到上個commit:  ```git reset --hard HEAD^```



切換分支:  ```git checkout [branch_name]```

建立並切換分支:  ```git checkout -b [branch_name]```

刪除分支:  ```git branch -d [branch_name]```

合併分支:  ```git merge [branch_name]```

合併分支(不用 fast forward 模式):  ```git merge --no-ff [branch_name]```

合併分支(不用 fast forward 模式):  ```git merge --no-ff -m [commit_name] [branch_name]```

rebase合併:https://blog.yorkxin.org/2011/07/29/git-rebase



與遠端連接:  ``` git remote add origin https://github.com/[tion846]/[project_name] ```  

上傳(push)分支:  ```git push origin [branch_name]```

同步遠端分支:  ```git pull```

切換遠端分支:  ```git checkout origin/[branch_name]```

clone:  ```git clone https://github.com/[owner]/[project_name]```

