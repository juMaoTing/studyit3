define(['jquery', 'template', 'jqueryForm', 'uploadify','datepicker','datepickercn','region','ckeditor'], function ($, template, jqueryForm, uploadify,datepicker,datepickercn,region,ckeditor) {
    //获取个人资料
    $.ajax({
        url: '/api/teacher/profile',
        type: 'get',
        success: function (info) {
            var settingInfo = template("settingInfo", info.result);
            $(".settings").html(settingInfo);
            //上传头像
            $('#upfile').uploadify({
                'swf': '/views/public/assets/uploadify/uploadify.swf',
                'uploader': '/api/uploader/avatar', //提交的接口
                'width': '120',
                'height': '120',
                'buttonText': '',
                'fileObjName': 'tc_avatar', //上传到服务器的文件名，也就是当前的input标签的name属性值
                onUploadSuccess: function (file, data, response) {
                    // var obj = JSON.parse(data);
                    // // obj.result.path
                    //  // 图片上传成功之后，服务器会返回一个图片在服务器的地址
                    // $('.preview img').attr('src',obj.result.path);
                    $('.preview img').attr('src', JSON.parse(data).result.path);
                }
            });
            //个人中心日期插件
            $("input[name=tc_birthday],input[name=tc_join_date]").datepicker({
                format:'yyyy/mm/dd',
                language:'zh-CN'
            });
            //省市区三级联动
            $("#region").region({
                url:'/views/public/assets/jquery-region/region.json'
            });
            //富文本编辑
            CKEDITOR.replace('introduce',{
            toolbarGroups:[
                { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                { name: 'links' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] }
                ]
        })
        }
    });
    //更新个人资料
    $(".settings").on("click", ".updateUser", function () {
        // var haha=$("#userForm").serialize();
        // haha.JSON.stringify();
        // console.log(haha.split('&'));
        $("#introduce").val(CKEDITOR.instances.introduce.getData());
        $("#userForm").ajaxSubmit({
            url: '/api/teacher/modify',
            type: 'post',
            success: function (info) {
                alert("更新成功");
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
    

});