var width,counter,size;
var index=1;
//Final code *******************************
$( document ).ready(function() {
    $(".works .work_slider .slider_body .work:nth-child(2)").addClass("active");
    $(".slider_body .slider_item:nth-child(1)").addClass("focused");

    $(".slider_body .slider_item").width(width);
    counter=0;
    width= $(".mobile_menu .widget_slider").width();
    size= ($(".slider_item").length-1);
    console.log(size*width,"/",width);
});
$( window ).resize(function(){
    width= $("mobile_menu .widget_slider").width();
    $(".slider_body .slider_item").width(width);

});
$(".icon-prev").on("click",function(){
    if( counter!=0){
        $(".slider_body .slider_item").removeClass("focused");
        index--;
        $(".slider_body .slider_item:nth-child("+index+")").addClass("focused");
        counter+=width;
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)");
    }
});
$(".icon-next").on("click",function(){
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
console.log(workWidth,"/",worksliderSize);
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
console.log(wordWidth,"/",wordsliderSize);

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