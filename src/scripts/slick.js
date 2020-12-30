$(function () {
    $('#account ul, #order ul').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        arrows: true,
        responsive: [{
            breakpoint: 640,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        }]
    })
    $(window).on('load', function(){
        let $img = $('#account li:first-child img')
        let h = $img.height().toFixed()
        $('.slick-arrow').css({
            'height': h
        })
    })
})