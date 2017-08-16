define(['jquery','template','jqueryForm'], function($,template) {
    //获取个人资料
    $.ajax({
         url:'/api/teacher/profile',
         type:'get',
         success:function(info){
             var settingInfo=template("settingInfo",info.result);
             $(".settings").html(settingInfo);
         }
    });
    //更新个人资料
    $(".settings").on("click",".updateUser",function(){
        // var haha=$("#userForm").serialize();
        // haha.JSON.stringify();
        // console.log(haha.split('&'));
        $("#userForm").ajaxSubmit({
            url:'/api/teacher/modify',
            type:'post',
            success:function(info){
                alert("更新成功");
            },
            error:function(err){
                console.log(err);
            }
        });
    });

});