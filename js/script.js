$(document).ready(function () {



    // 
    $("#panelRight").click(function () {
        if ($('.quick_seacrh').is(':visible')) {
            $('.quick_seacrh').hide();
            $(this).removeClass('icon-active');
        } else {
            $('.quick_seacrh').show();
            $(this).addClass('icon-active');
        }

    });

    // 
    $("#nav-button").click(function () {
        $('#mask').toggleClass('mask-block');
        $(this).toggleClass('close');
        if ($('.sidebar').is(':visible')) {
            $('.sidebar').hide();
            $(this).removeClass('icon-active');
        } else {
            $('.sidebar').show();
            $(this).addClass('icon-active');
        }

    });

    $('#mask').click(function() {
        $(this).removeClass('mask-block');
        $("#nav-button").removeClass('close').removeClass('icon-active');
        $('.sidebar').hide();
    });


    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 110 && $('.sidebar').is(':not(:visible)')) {
            $('header').slideUp(400);
            $('.quick_seacrh').slideUp(0);
            $("#panelRight").removeClass('icon-active');
        } else {
            if (st < 900) {
                $('header').slideDown(400);
            }
        }
        lastScrollTop = st;
    });

    // if ($('.navigation .prev').has('a')) {
    //     $('.navigation .prev').hide();
    //     $('.navigation .prev').css('width', '100%');
    // }



});