define(['jquery', 'template', 'jqueryForm'], function ($, template) {
    //讲师编辑
    var search = location.search;
    search = search.slice(1);
    var searchArr = search.split("&");
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
        var newArr = searchArr[i].split("=");
        obj[newArr[0]] = newArr[1];
    }
    $.ajax({
        url: '/api/teacher/edit',
        type: 'get',
        data: {
            tc_id: obj.tc_id
        },
        success: function (info) {
            info.result.title = "讲师编辑";
            info.result.saveInfo = "保 存";
            var managerList = template("managerList", info.result);
            $(".teacher").html(managerList);
        }
    });
    // 讲师添加
    $("#teaAdd").on("click", function () {
        var data = $("#teacherAdd").serialize();
        $.ajax({
            url: '/api/teacher/add',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function (result) {
                alert("添加成功");
                location.href = './list'
            },
            error: function (err) {
                alert("添加失败");
            }
        });
        return false;
    });
    //修改讲师
    $(".teacher").on("click",".saveInfoBtn",function(){
        $("form").ajaxSubmit({
            url:'/api/teacher/update',
            type:'post',
            data:{tc_id:obj.tc_id},
            success:function(info){
                alert("提交成功");
            },
            error:function(err){
                alert("操作失败");
                console.log(err);
            }
        });
        return false;
    });
   
});