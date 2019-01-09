$(function () {

    /* 组件初始化 */
    layui.use('laydate', function () {
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#o_date' //指定元素
        });
    });
    layui.use('form', function () {
        var form = layui.form;

        //各种基于事件的操作，下面会有进一步介绍
    });

    
})