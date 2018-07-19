$(".icon-search").click(function(){
    $(".form ").toggle();
    if(!$("component:not(.search)").is(":visible")){
        $("component:not(.search)").toggle();
    }
});
$(".one_widget").hover(function(){
    $(this).toggleClass('opened');
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
});