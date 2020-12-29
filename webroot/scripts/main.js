"use strict";

$(function () {
  var methods = {
    navFixed: function navFixed() {
      $(document).on('scroll', function () {
        var y = $(this).scrollTop();
        var r = $('#menu').innerHeight();

        if (y >= $('#kv').innerHeight()) {
          $('#menu').addClass('fixed');
          $('#menu + .wrapper').css({
            'margin-top': r
          });
        } else {
          $('#menu').removeClass('fixed');
          $('#menu + .wrapper').css({
            'margin-top': ''
          });
        }
      });
    },
    acdToggle: function acdToggle() {
      $('.acd .acd-item .acd-head').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).siblings().slideToggle('slow');
      });
    },
    hashTarget: function hashTarget() {
      $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      });
    },
    removeLocationHash: function removeLocationHash() {
      var noHashURL = window.location.href.replace(/#.*$/, '');
      window.history.replaceState('', document.title, noHashURL);
    }
  };

  var init = function init() {
    methods.navFixed();
    methods.acdToggle();
    methods.removeLocationHash();
  };

  var beforeunload = function beforeunload() {
    $(window).on('beforeunload', function () {
      location.reload();
      $(window).scrollTop(0);
    });
  };

  init();
  beforeunload();
});