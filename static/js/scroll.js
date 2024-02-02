$(document).ready(function () {
    $('.products-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true, /* Slick no fuerce un ancho específico en los slides, permitiéndote controlar el tamaño de los elementos */
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
});