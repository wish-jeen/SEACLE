$(function(){
    $('.submenu').hide();
    $('.gnb').mouseenter(function(){
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseleave(function(){
        $('.submenu').stop().slideUp();
    });
});

$(".gnb li").mouseenter(function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
});
