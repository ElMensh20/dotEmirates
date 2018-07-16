$(document).ready(function(){
    $(".body").hide();
    $(".do_search").hide();
})
$(".menu_button").click(function(){
    $(".body").toggle();
    $(".menu_button").toggleClass('opened');
});

$("#more").click(function(){
    $(".more_list").show();
    $(".main_list").hide();
}); 
$("#back").click(function(){
    $(".more_list").hide();
    $(".main_list").show();
});

$("#open_search").click(function(){
    $(".header_menu").hide();
    $(".do_search").show();
});
$("#close_search").click(function(){
    $(".header_menu").show();
    $(".do_search").hide();
});

hrVisible=false;
var viewportWidth;
$(window).resize(function(){
    viewportWidth = $(window).width();});
if (viewportWidth <= 768) {
    $(".gas_price_icon").click(function(){
        hideAllIconContent(1);
        $("mobile_gas_price").toggle();
        hrVisiblity();
    });
    $(".currency_converter_icon").click(function(){
        hideAllIconContent(2);
        $(".currency_converter").toggle();
        hrVisiblity();
    });
    $(".prayer_time_icon").click(function(){
        hideAllIconContent(3)
        $(".prayer_time").toggle();
        hrVisiblity();
    });
    $(".wheather_icon").click(function(){
        hideAllIconContent(4);  
        $(".weather").toggle();
        hrVisiblity();
    });
    $(".stock_icon").click(function(){
        hideAllIconContent(5);  
        $(".stock").toggle();
        hrVisiblity();
    });
}else{
    // $(".gas_price_icon").hover(function(){
    //     $(".gas_price").toggle();
    // });
    // $(".gas_price").mouseover (function(){
    //     $(".gas_price").show();
    // });
    // $(".gas_price").mouseleave (function(){
    //     $(".gas_price").hide();
    // });
    $(".currency_converter_icon").hover(function(){
        $(".currency_converter").toggle();
    });
    $(".currency_converter").mouseover (function(){
        $(".currency_converter").show();
    });
    $(".currency_converter").mouseleave (function(){
        $(".currency_converter").hide();
    });
    $(".prayer_time_icon").hover(function(){
        $(".prayer_time").toggle();
    });
    $(".prayer_time").mouseleave (function(){
        $(".prayer_time").hide();
    });
    $(".prayer_time").mouseover (function(){
        $(".prayer_time").show();
    });
    $(".wheather_icon").hover(function(){
        $(".weather").toggle();
    });
    $(".weather").mouseover (function(){
        $(".weather").show();
    });
    $(".weather").mouseleave (function(){
        $(".weather").hide();
    });
    $(".stock_icon").hover(function(){
        $(".stock").toggle();
    });
    $(".stock").mouseover (function(){
        $(".stock").show();
    });
    $(".stock").mouseleave (function(){
        $(".stock").hide();
    });        
}
function hideAllIconContent(except){
    switch(except){
        case 1:
            $(".stock").hide();
            $(".weather").hide();
            $(".prayer_time").hide();
            $(".currency_converter").hide();
            break;
        case 2:
            $(".stock").hide();
            $(".weather").hide();
            $(".prayer_time").hide();
            $(".gas_price").hide();
            break;
        case 3:
            $(".stock").hide();
            $(".weather").hide();
            $(".currency_converter").hide();
            $(".gas_price").hide();
            break;
        case 4:
            $(".stock").hide();
            $(".prayer_time").hide();
            $(".currency_converter").hide();
            $(".gas_price").hide();
           break;
        case 5:
            $(".weather").hide();
            $(".prayer_time").hide();
            $(".currency_converter").hide();
            $(".gas_price").hide();
            break;
    }

}
function hrVisiblity(){
    if(!hrVisible){
        $(".icon_content_hr").toggle();
        hrVisible=true;
    }else{
        hrVisible=false;
    }
}
function hideAll(){
    $(".weather").hide();
    $(".prayer_time").hide();
    $(".currency_converter").hide();
    $(".gas_price").hide();
    $(".stock").hide();

}
