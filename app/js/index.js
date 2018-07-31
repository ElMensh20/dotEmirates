$(document).ready(function(){
    $(".works .work_slider .slider_body .work:nth-child(2)").addClass("active");
    $(".slider_body .slider_item:nth-child(1)").addClass("focused");
    initWeatherSlider();
});
$(".icon-search").click(function(){
    if($(window).width()>1300){
        $(".form ").toggle();
        $(".component:not(.search)").toggle();
    }
});
$(".local").click(function(){
    $("body").toggleClass("en");
    if($(".local").text()=="EN"){
        $(".local").html("AR");
    }else{
        $(".local").html("EN");
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
      $(".one_item").eq(index).addClass('opened');
      $('.one_item .widget_content').slideUp(300);
      $('.one_item .widget_content').eq(index).slideDown(300);
    }
    if($(".weather .widget_slider").css('display') !== 'none'){
        counter=0;
        width= $(".wheather_slider").width();
        size= (($(".wheather_slider .slider_item").length)-1)*width;
        console.log(size,"/",width);
        $(".wheather_slider .slider_body .slider_item").width(width);
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

function initWeatherSlider(){
    counter=0;
    width= $(".widget_slider").width();
    size= (($(".slider_item").length/2)-1)*width;
    console.log(size,"/",width);
    $(".slider_body .slider_item").width(width);
}

/***********************************Sliders******************************************** */


var width,counter,size;
var index=1;
//Final code *******************************
$( window ).resize(function(){
    width= $("mobile_menu .widget_slider").width();
    $(".slider_body .slider_item").width(width);

});
$(".icon-next").on("click",function(){
    if( counter!=0){
        $(".slider_body .slider_item").removeClass("focused");
        index--;
        $(".slider_body .slider_item:nth-child("+index+")").addClass("focused");
        counter+=width;
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)");
    }
});
$(".icon-prev").on("click",function(){
    if(counter!=-size){
        counter-=width;
        $(".slider_body .slider_item").removeClass("focused");
        index++;
        $(".slider_body .slider_item:nth-child("+index+")").addClass("focused");
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)");
    }
});

workIndex=2;
workCounter=0;
workWidth=$(".works .work_slider .slider_body .work").outerWidth();
worksliderSize=($(".works .work_slider .slider_body .work").length-1)*workWidth;
// console.log(workWidth,"/",worksliderSize);
$(".icon-left").on("click",function(){
    if( workCounter!=(workWidth)){
        $(".works .work_slider .slider_body .work").removeClass("active");
        workIndex--;
        $(".works .work_slider .slider_body .work:nth-child("+workIndex+")").addClass("active");
        workCounter+=workWidth;
        $(".works .work_slider .slider_body").css("transform","translate3d("+workCounter+"px, 0px, 0px)");
    }
});
$(".icon-right").on("click",function(){
    if(workCounter!=-(worksliderSize-workWidth)){
        workCounter-=workWidth;
        $(".works .work_slider .slider_body .work").removeClass("active");
        workIndex++;
        $(".works .work_slider .slider_body .work:nth-child("+workIndex+")").addClass("active");
        $(".works .work_slider .slider_body").css("transform","translate3d("+workCounter+"px, 0px, 0px)");    }
});

wordIndex=1;
wordCounter=0;
wordWidth=$(".his_words .inner .words_slider .slider_body .word").width();
wordsliderSize=($(".his_words .inner .words_slider .slider_body .word").length-1)*wordWidth;
// console.log(wordWidth,"/",wordsliderSize);

$(".icon-left-small").on("click",function(){
    if( wordCounter!=0){
        wordIndex--;
        wordCounter+=wordWidth;
        $(".his_words .inner .words_slider .slider_body .in").css("transform","translate3d("+wordCounter+"px, 0px, 0px)");
    }
});
$(".icon-right-small").on("click",function(){
    if(wordCounter!=-(wordsliderSize)){
        wordCounter-=wordWidth;
        wordIndex++;
        $(".his_words .inner .words_slider .slider_body .in").css("transform","translate3d("+wordCounter+"px, 0px, 0px)");
    } 
});