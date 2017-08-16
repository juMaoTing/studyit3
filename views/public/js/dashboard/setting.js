define(['jquery','template'], function($,template) {
    $.ajax({
         url:'/api/teacher/profile',
         type:'get',
         success:function(info){
             var settingInfo=template("settingInfo",info.result);
             $(".settings form").html(settingInfo);
            console.log(info);
         }
    });
});