define(['jquery','template','cookie'], function($,template) {
    //顶级分类渲染
    $.ajax({
        url:'/api/category/top',
        type:'get',
        success:function(info){
            var tlpCategory=template("tlpCategory",info);
            $("#categoryList").html(tlpCategory);
        },
        error:function(err){
            console.log(err);
        }
    });
    // 子级分类渲染
    // $.ajax({
    //     url:'/api/category/child',
    //     type:'get',
    //     data:{},
    //     success:function(info){
    //         console.log(info);
    //         var tlpCategory=template("tlpCategory",info);
    //         $("#categoryList").html(tlpCategory);
    //     },
    //     error:function(err){
    //         console.log(err);
    //     }
    // });
});