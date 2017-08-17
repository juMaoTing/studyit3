define(['jquery','template','cookie'], function($,template) {
    //顶级分类渲染
    $.ajax({
        url:'/api/category/top',
        type:'get',
        success:function(info){
            console.log(info);
            var tlpCategory=template("tlpCategory",info);
            $("#categoryList").html(tlpCategory);
        },
        error:function(err){
            console.log(err);
        }
    });
    // 子级分类渲染
    $.ajax({
        url:'/api/category/child',
        type:'get',
        data:{cg_id:1},
        success:function(result){
            console.log(result);
            var tlpCategoryChild=template("tlpCategoryChild",result);
            $("#categoryList").append(tlpCategoryChild);
        },
        error:function(err){
            console.log(err);
        }
    });
});