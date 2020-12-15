$(function() {
    $('.nav-open, .nav-close').click(function(e) {
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });
    //Onde a mágia acontece! rs
    $('#home').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});