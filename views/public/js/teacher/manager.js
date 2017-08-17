define(['jquery', 'template', 'datepicker', 'datepickercn', 'jqueryForm'], function ($, template, datepicker) {
    //讲师编辑
    var search = location.search;
    search = search.slice(1);
    var searchArr = search.split("&");
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
        var newArr = searchArr[i].split("=");
        obj[newArr[0]] = newArr[1];
    }
    if (obj.tc_id) {
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
                $("input[name=tc_join_date]").datepicker({
                    format: 'yyyy/mm/dd',
                    language: 'zh-CN'
                });
            }
        });
        // console.log($("input[name=tc_join_date]").val());
        // $("input[name=tc_join_date]").on('click',function(){
        //     alert(123);
        // });

        ajaxSubmit('/api/teacher/update');
    } else {
        var managerList = template("managerList", {
            title: '讲师添加',
            saveInfo: '保 存',
            tc_gender: 0
        });
        $(".teacher").html(managerList);
        $("input[name=tc_join_date]").datepicker({
            format: 'yyyy/mm/dd',
            language: 'zh-CN'
        });
        ajaxSubmit('/api/teacher/add');
    }

    //修改讲师
    function ajaxSubmit(url) {
        $(".teacher").on("click", ".saveInfoBtn", function () {
            $("form").ajaxSubmit({
                url: url,
                type: 'post',
                data: {
                    tc_id: obj.tc_id
                },
                success: function (info) {
                    alert("提交成功");
                    location.href = '/teacher/list'
                },
                error: function (err) {
                    alert("操作失败");
                    console.log(err);
                }
            });
            return false;
        });
    }

});