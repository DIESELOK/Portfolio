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
        //при клике на меню вращение сендвича
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
        //при клике на ссылки менею прячем меню
    $(".top_mnu ul a").click(function(){
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
    });

    $('.toggle_mnu').click(function(){
        if ($(".top_mnu").is(':visible')){
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        }
    });
});

    // Прелоадер
    $(window).load(function() {
        $(".loader_Inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");

    });