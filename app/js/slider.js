counter=0;
width= $(".slider_item").width();
 size= ($(".slider_item").length-1)*width;
 
 index=1;
//Final code *******************************
$( document ).ready(function() {
    console.log(size);
    console.log(width);
    
    console.log($(".slider_item").length);
    
    $(".slider_body .slider_item:nth-child(1)").addClass("focused");
});
$(".icon-prev").on("click",function(){
    if( counter!=0){
        $(".slider_body .slider_item:nth-child("+index+")").removeClass("focused");
        index--;
        $(".slider_body .slider_item:nth-child("+index+")").addClass("focused");
        counter+=width;
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)");
        console.log(counter);
    }
});
$(".icon-next").on("click",function(){
    if(counter!=-size){
        counter-=width;
        $(".slider_body .slider_item:nth-child("+index+")").removeClass("focused");
        index++;
        $(".slider_body .slider_item:nth-child("+index+")").addClass("focused");
        $(".slider_body").css("transform","translate3d("+counter+"px, 0px, 0px)");
        console.log(counter);
    }
});