$(function(){
    $(".sidenav").on('click','li',function(){
        $(this).siblings().removeClass('layui-nav-itemed')
        $(this).addClass('layui-nav-itemed')
    })

})