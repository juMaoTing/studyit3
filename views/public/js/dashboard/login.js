define(['jquery','cookie'],function($){
    //登录
        $("#formLogin").submit(function(){
            var data=$(this).serialize();
            $.ajax({
                url:'/api/login',
                type:'post',
                dataType:'json',
                data:data,
                success:function(result){
                    // alert("登录成功...");
                    $.cookie('tcInfo',JSON.stringify(result.result));
                    location.href='/';
                },
                error:function() {
                    alert("登录失败");
                }
            });
            return false;
        });
});