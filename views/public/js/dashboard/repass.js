define(['jquery','jqueryForm'], function($) {
    //  $(".updatePass").on("click",function(){
    //     console.log($(".repass form").serialize());
    //     return false;
    //  })
    $(".updatePass").on("click",function(){
        $(".repass form").ajaxSubmit({
            url:'/api/teacher/repass',
            type:'post',
            success:function(info){
                alert("修改成功");
                console.log(info);
            },
            error:function(err){
                console.log(err);
            }
        });
        return false;
    });
});