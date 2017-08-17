require.config({
        baseUrl:'/views/public',
        paths:{
            'jquery':'assets/jquery/jquery.min',
            'jqueryForm':'assets/jquery-form/jquery.form',
            'bootstrap':'assets/bootstrap/js/bootstrap.min',
            'template':'assets/artTemplate/template',
            'nprogress':'assets/nprogress/nprogress',
            'echarts':'assets/echarts/echarts.min',
            'cookie':'assets/jquery-cookie/jquery.cookie',
            'datepicker':'assets/bootstrap-datepicker/js/bootstrap-datepicker',
            'datepickercn':'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
            // 'uploadify':'assets/uploadify/jquery.uploadify',
            'uploadify': 'assets/uploadify/jquery.uploadify',
            'common':'js/dashboard/common',
            'login':'js/dashboard/login'
        },
        shim:{
            'bootstrap':{
                deps:['jquery']
            },
            'datepickercn':{
                deps:['jquery']
            },
            'uploadify':{
                deps:['jquery']
            }
        
        }
});
    /**
     * 定义完模块之后，一定要先调用一下，因为每个页面，都需要执行一下common看看是不是第一次请求服务器，
     *如果是的话，需要先登录
     */
    require(['common']);