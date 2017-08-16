
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
    // if(!$.cookie('PHPSESSID')&&location.pathname!="/login"){
    //     location.href='/login';
    // }
    // //登录
    //     $("#formLogin").submit(function(){
    //         var data=$(this).serialize();
    //         $.ajax({
    //             url:'/api/login',
    //             type:'post',
    //             dataType:'json',
    //             data:data,
    //             success:function(result){
    //                 $.cookie('tcInfo',JSON.stringify(result.result));
    //                 location.href='/';
    //             },
    //             error:function() {
    //                 alert("登录失败");
    //             }
    //         });
    //         return false;
    //     });
    //     //除了login页面，其他页面使用的
    // if(location.href!="/login" && location.href!="/dashboard/login" && location.href!="/views/dashboard/login"){
    //     console.log(JSON.parse($.cookie("tcInfo")));
    //     //根据cookie保存的数据渲染到aside
    //     var uProfile=template("uProfile",JSON.parse($.cookie("tcInfo")));
    //     $(".aside>.profile").html(uProfile);

    //     //系统退出
    //     $("#exit").on("click",function(){
    //         $.ajax({
    //             url:'/api/logout',
    //             type:'post',
    //             success:function(){
    //                 location.href='/';
    //             },
    //             error:function(){
    //                 alert("退出失败")
    //             }
    //         });
    //     });
    //     //讲师添加
    //     $("#teaAdd").on("click",function(){
    //         var data = $("#teacherAdd").serialize();
    //         $.ajax({
    //             url:'/api/teacher/add',
    //             type:'post',
    //             data:data,
    //             dataType:'json',
    //             success:function(result){
    //                 alert("添加成功");
    //                 console.log(result);
    //                 location.href='./list'
    //             },
    //             error:function(err){
    //                 alert("添加失败");
    //                 console.log(err);
    //             }
    //         });
    //         return false;
    //     });
    //     //讲师列表
    //     function render(){
    //     $.ajax({
    //         url:'/api/teacher',
    //         type:'get',
    //         success:function(info){
    //             console.log(info);
    //             if(info.code==200){
    //                 var lis=info.result;
    //             for(var i = 0 ; i<lis.length ; i++){
    //                 if(lis[i].tc_gender=='1'){
    //                     lis[i].tc_gender='女';
    //                 }else if(lis[i].tc_gender=='0'){
    //                     lis[i].tc_gender='男';
    //                 }
    //             }
    //             var teaList=template('teaList',info);
    //             $("#teaBody").append(teaList);
    //             }

    //         }
    //         });
    //     }
    //     render();
    //     //编辑讲师
    //     $("tbody").on("click","a",function(){
    //         if($(this).attr("data-id")){
    //         alert(123);
    //         }
    //     });
    // }

define(['jquery','cookie','template'],function($,cookie,template){
    if(!$.cookie('PHPSESSID')&&location.pathname!="/login"){
        location.href='/login';
    }
    
        //除了login页面，其他页面使用的
    if(location.href!="/login" && location.href!="/dashboard/login" && location.href!="/views/dashboard/login"){
        //根据cookie保存的数据渲染到aside
        var uProfile=template("uProfile",JSON.parse($.cookie("tcInfo")));
        $(".aside>.profile").html(uProfile);

    }

    //系统退出
        $("#exit").on("click",function(){
            $.ajax({
                url:'/api/logout',
                type:'post',
                success:function(){
                    location.href='/';
                },
                error:function(){
                    alert("退出失败")
                }
            });
        });
    //课程管理，系统设置下拉
        $(".navs a+ul").prev().on("click",function(){
            $(this).next().slideToggle();
        });
});