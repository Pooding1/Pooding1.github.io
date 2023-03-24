jQuery(document).ready(function(){

    $(".main").mouseover(function(){
        $(".bgmenu").stop().slideDown()
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(".bgmenu").stop().slideUp()
        $(this).find(".sub").stop().slideUp()
    })



})
