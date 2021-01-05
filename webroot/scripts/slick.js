"use strict";

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
  });
  $(window).on('load', function () {
    var $img = $('#account li:first-child img');
    var h = $img.height().toFixed();
    $('.slick-arrow').css({
      'height': h
    });
  });
});
//# sourceMappingURL=slick.js.map
