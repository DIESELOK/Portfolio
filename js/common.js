$(document).ready(function() {

    // автоподбор под высоту экрана...
    function heightDetect(){
        $('.main_head').css('height', $(document).height());
    };
    heightDetect();
    $(window).resize(function(){
        heightDetect();
    })

    // сендвич меню
    $(".sandwich, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $('.toggle_mnu').click(function(){
        if ($(".top_mnu").is(':visible')){
            $(".top_mnu").fadeOut(600);
        } else {
            $(".top_mnu").fadeIn(600);
        }
    });
});

    // Прелоадер
    $(window).load(function() {
        $(".loader_Inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");

    });