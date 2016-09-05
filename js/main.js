$(document).ready(function(){
    function returnFalse(e){
        e = e||event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };
    $('#button2').click(function () {
        $('#sl_button').on('click', 'a', function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body, html').animate({scrollTop: top}, 1500);
        });
        /* animated scroll for use button*/
    });
    $('#button_menu').click(function () {
        $('#menu_box').show('slow')
    });/*animate menu button*/

    $('#close').click(function () {
        $('#menu_box').hide('slow')
    });

    $('#menu').click(function () {
        $('#menu_box').hide('slow', function () {
            $('#menu').on('click', 'a', function (event) {
                $(document).addEventListener("scroll", returnFalse);
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body, html').animate({scrollTop: top}, 1500);
                $(document).removeEventListener("scroll", returnFalse);
            });
        });
    });
    $('#button1').click(function () {
        $('#hire_us').show('slow', function () {
            $('#sl_button').on('click', 'a', function (event) {
                $(document).addEventListener("scroll", returnFalse);
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body, html').animate({scrollTop: top}, 1500);
                $(document).removeEventListener("scroll", returnFalse);
            });
        });
    });
    $('#c_button1').click(function () {
        $('#hire_us').show('slow', function () {
            $('#contact').on('click', 'a', function (event) {
                $(document).addEventListener("scroll", returnFalse);
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body, html').animate({scrollTop: top}, 1500);
                $(document).removeEventListener("scroll", returnFalse);
            });
        });
    });
    $('#close_hire_us').click(function () {
        $('#hire_us').hide('slow')
    });
});

