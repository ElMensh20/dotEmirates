$(".icon-search").click(function(){
    if($(window).width()>1300){
        $(".form ").toggle();
        $(".component:not(.search)").toggle();
    }
});
$(".one_widget").hover(function(){
    $(this).toggleClass('opened');
});
$(".widget_icon").click(function(){
    index=$('.widget_icon').index(this);
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.one_item .widget_content').slideUp(300);
    }else{
      $('.mobile_menu .menu_body .widget_icons .widget_icon').removeClass('active');
      $(this).addClass('active');
      $('.one_item .widget_content').slideUp(300);
      $('.one_item .widget_content').eq(index).slideDown(300);
    }
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
    $(".mobile_menu").slideToggle(550);
});