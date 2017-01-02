'use strict';

let SERVER = 'http://localhost:3000';



$(document).ready(function () {



    $('#btnSign').click(function () {
        console.log('btn cilck');
        let name = $('#name').val();
        let pwd = $('#password').val();

        if (pwd !== $('#Repassword').val()) {
            alert("密碼不相符");
            
            return;
        }

        if (name && pwd && $('#Repassword').val()) {
            console.log($('#name').val(), $('#password').val(), $('#Repassword').val());

            // jquery 的 get 、post
            // $.post(SERVER+'/reg', {name: name, password: pwd});

            $.post(SERVER + '/reg', {name:name,password:pwd}, function (result) {
                console.log(result);
                alert(result.msg);
            });
        }

    });
});



