$(function(){
    $('.input_sub').on('click',function(){
        var user_name = $('.input_txt').val();
        var password = $('.input_pass').val();
        if(user_name.trim() == '' || password.trim() == ''){
            alert('请填写完整表单');
            return;
        }

        //发送请求
        $.ajax({
            url : USER_LOGIN,
            type : 'post',
            data : {
                user_name : user_name,
                password : password
            },
            success : function(res){
                if(res.code === 200){
                    location.href = './index.html';
                }else {
                    alert('用户名或密码错误');
                }
            }
        })
    });

});