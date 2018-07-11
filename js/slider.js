counter=120;
 size= ($(".body_block").children().length-2)*-120;
 
 index=1;
//Final code *******************************
$( document ).ready(function() {
    console.log(size);
    $(".slider_body .body_block:nth-child(1)").addClass("active_block");
});
$(".icon-next").on("click",function(){
    if(counter!=120){
        $(".slider_body .body_block:nth-child("+index+")").removeClass("active_block");
        index--;
        $(".slider_body .body_block:nth-child("+index+")").addClass("active_block");
        counter+=120;
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)")
    }
});
$(".icon-prev").on("click",function(){
    if(counter!=size){
        counter-=120;
        $(".slider_body .body_block:nth-child("+index+")").removeClass("active_block");
        index++;
        $(".slider_body .body_block:nth-child("+index+")").addClass("active_block");
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)")
    }
});