define(['jquery','template','bootstrap'], function($,template) {
    //讲师列表
    function render() {
        $.ajax({
            url: '/api/teacher',
            type: 'get',
            success: function (info) {
                if (info.code == 200) {
                    var lis = info.result;
                    // for (var i = 0; i < lis.length; i++) {
                    //     if (lis[i].tc_gender == '1') {
                    //         lis[i].tc_gender = '女';
                    //     } else if (lis[i].tc_gender == '0') {
                    //         lis[i].tc_gender = '男';
                    //     }
                    // }
                    var teaList = template('teaList', info);
                    $("#teaBody").html(teaList);
                }

            }
        });
    }
    render();
    //模态框显示
    $("#teaBody").on("click", ".lookMod", function () {
            var tcId = $(this).parent().attr("data-tid");
            $.ajax({
                url: '/api/teacher/view',
                type: 'get',
                data: {
                    tc_id: tcId
                },
                success: function (info) { 
                    console.log(info.result);
                    var html = template("viewList", info.result);
                    $("#viewId").html(html);
                    $("#teacherModal").modal();
                     
                }
            });
    });    
    //按钮的注销和启用
    $("#teaBody").on("click","a.btnHandle",function(){
        var _this=$(this);
        var tId=$(this).parent().attr("data-tid");
        var tStatus=$(this).attr("data-status");
        $.ajax({
            url:'/api/teacher/handle',
            type:'post',
            data:{tc_id:tId,tc_status:tStatus},
            success:function(info){
                
                if(info.code==200){
                    if(info.result.tc_status==1){
                        _this.text("启 用");
                    }else{
                        _this.text("注 销");
                    }
                     _this.attr("data-status",info.result.tc_status);
                }
            }
        });
    });

});
