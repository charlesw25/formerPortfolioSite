$(document).ready(function () {
    $('.menu-button').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-button').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 750);
    });

    AOS.init({
        easing: 'ease',
        duration: 1500
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});