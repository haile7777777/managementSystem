$(function(){
    $(".sidenav").on('click','li',function(){
        $(this).siblings().removeClass('layui-nav-itemed')
        $(this).addClass('layui-nav-itemed')
    })

    let isShow = 1;
    if(isShow === 0){
        $('#userManage').css('display','none')
    }

})