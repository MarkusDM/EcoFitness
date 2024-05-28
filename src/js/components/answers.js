import $ from "jquery";

$('.answers__item-head').on('click', function(){
    if(!$(this).closest('.answers__item').hasClass('active')) {
        $('.answers__item.active').find('.answers__item-bottom').slideToggle(500)
        $('.answers__item.active').toggleClass('active')
    }
    $(this).closest('.answers__item').toggleClass('active');
    $(this).siblings('.answers__item-bottom').slideToggle(500);
});