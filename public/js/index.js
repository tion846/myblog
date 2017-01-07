'use strict';
// import * as cookies from 'js-cookie';
// import * as Cookies from "./js-cookie";

let SERVER = 'http://localhost:3000';
// const cookies = require('js-cookie');


$.get(SERVER + "/", function (result) {

    console.log(JSON.stringify(result));
    for (let t of result) {
        t.time = changeTimeStyle(t.time);
    }
    // console.log(changeTimeStyle(1483684694728-20000000));
    // console.log(changeTimeStyle(1483790102509));
    // console.log(changeTimeStyle(1483795280343));

    let islogin = false;

    if (getCookie('name')) {
        islogin = true;
        console.log('islogin : ', islogin);
    }

    new Vue({
        el: '#myapp',
        data: {
            islogin: islogin,
            items: result,
        }
    });


    $('#btnToggleSign').click(function () {
        console.log('btnToggleSign cilck');
        $('#logDiv')
            .removeClass()
            .addClass('hide');
        $('#signDiv')
            .removeClass()
            .addClass('fadeout');
        // $('#signDiv').removeClass('hide');
    });


    $('#btnSign').click(function () {
        console.log('btnSign cilck');
        let name = $('#signName').val();
        let pwd = $('#signPwd').val();

        if (pwd !== $('#signRePwd').val()) {
            alert("密碼不相符");

            return;
        }

        if (name && pwd && $('#signRePwd').val()) {
            console.log($('#signName').val(), $('#signPwd').val(), $('#signRePwd').val());

            // jquery 的 get 、post
            // $.post(SERVER+'/reg', {name: name, password: pwd});

            $.post(SERVER + '/reg', {name: name, password: pwd}, function (result) {
                console.log(result);
                alert(result.msg);
                if (result.success === 1) {
                    setCookie('name', name);
                    setCookie('pwd', pwd);
                    islogin = true;
                    location.reload();
                }
            });
        }

    });

    $('#btnLogin').click(function () {
        console.log('btnLogin cilck');
        let name = $('#logName').val();
        let pwd = $('#logPwd').val();
        if (name && pwd) {
            $.post(SERVER + '/login', {name: name, password: pwd}, function (result) {
                // setCookie('name', name);
                // setCookie('pwd', pwd);
                console.log(result);
                if (result.msg)alert(result.msg);
                if (result.success === 1) {
                    setCookie('name', name);
                    setCookie('pwd', pwd);
                    islogin = true;
                    location.reload();
                }
            });

        }
    });

    $('#btnPost').click(function () {

        let name = getCookie('name');
        let msg = $('#inputMsg').val();
        let ispublic = $('#ispublic').prop('checked');

        console.log(name, msg, ispublic);
        if (name && msg) {
            $.post(SERVER + '/post', {name, msg, ispublic}, function (result) {

            });
            $('#inputMsg').val("");
            location.reload();
        }


    });
});


function showlogin() {
    $('#signDiv')
        .removeClass()
        .addClass('hide');
    $('#logDiv')
        .removeClass()
        .addClass('fadeout');
}

function logout() {
    delCookie('name');
    delCookie('pwd');
    location.reload();
}

function changeTimeStyle(time) {
    let now = Math.round((new Date().getTime() - time) / 1000, 3);
    // console.log(new Date().getTime(), time, new Date().getTime() - time, now);

    if (now > 60 * 60 * 24) {
        let t = new Date(time);
        let date = t.getDate() < 10 ? '0' + t.getDate() : t.getDate();
        let hour = t.getHours() < 10 ? '0' + t.getHours() : t.getHours();
        let min = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes();
        return t.getFullYear() + '/' + t.getMonth() + 1 + '/' + date + '  ' + hour + ':' + min;
    } else if (now > 60 * 60) {
        return Math.round((now / 60 / 60), 1) + '小時前';
    } else {
        return Math.round((now / 60), 1) + '分鐘前';
    }

    return;
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}