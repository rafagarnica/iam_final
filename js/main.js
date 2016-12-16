$(".iconos").hover(function(){
    $(this).addClass('animated pulse');
});
$(".iconos").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){
    $(this).removeClass('animated pulse');
});
