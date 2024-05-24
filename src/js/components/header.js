import $ from "jquery";

$('.header__main-menu').on('click', function(){
    $('html').addClass('lock')
    $(this).closest('.header').addClass('active')
})
$('.header__container-header').on('click', function(){
    $('html').removeClass('lock')
    $(this).closest('.header').removeClass('active')
})