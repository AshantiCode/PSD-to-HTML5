$(document).ready(() => {
    new WOW().init();

    $('.js-wp-2').waypoint(
        direction => {
            $('.js-wp-2').addClass('animated slideInUp');
        },
        {
            offset: '30%'
        }
    );

    $('.js-wp-3').waypoint(
        direction => {
            $('.js-wp-3').addClass('animated fadeIn');
        },
        {
            offset: '70%'
        }
    );

    $('.iphone-btn')
        .delay(2000)
        .animate({ bottom: '+=-3' }, 200);
    $('.iphone-btn')
        .delay(300)
        .animate({ top: '+=-3' }, 200);
});
