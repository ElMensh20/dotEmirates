$(".icon-search").click(function(){
    $(".form ").toggle();
    if(!$("component:not(.search)").is(":visible")){
        $("component:not(.search)").toggle();
    }
});
$(".one_widget").hover(function(){
    $(this).toggleClass('opened');
});
$(".widget_icon").click(function(){
    $(".one_widget").removeClass("opened");
    alert( $('.widget_icon').index(this) );
    index=$('.widget_icon').index(this);
    $(".one_widget:nth-of-type("+(index+1)+")").toggleClass('opened');
});
$('.more').click(function() {
    $(".one").hide();
    $(".two").show();
});
$('.back').click(function() {
    $(".two").hide();
    $(".one").show();
});
$(".menu_button").click(function(){
    $(this).toggleClass("button_opened");
    $(".mobile_menu").toggle();
    $("body").toggleClass("over_flow");
});