$(document).ready(function(){

    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left fa-lg"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right fa-lg"></i></button>'
    });

});