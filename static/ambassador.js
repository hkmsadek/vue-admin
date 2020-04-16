
$(window).on('load', function() {
  'use strict';
  $('#loading').addClass('u-hidden');
});


(function($) {
  'use strict';

  /*====================================================*/
  /* VARIABLES                                           */
  /*====================================================*/
  var navBar = $('.navbar'),
    navbarLinks = $('.navbar .nav-link'),
    window_height = window.innerHeight,
    header_height = navBar.height(),
    fitScreen = window_height - header_height;

  /*====================================================*/
  /* HERO FULL SCREEN CALCULATOR                                    */
  /*====================================================*/
  $(".screen-v-100").css("height", window_height);
  $(".screen-v-100").css("height", fitScreen);

  /* ==========================================================================
    DEVICE CAROUSEL
  ========================================================================== */

  var $overviewSlide = $('.owl-carousel')
  if ($overviewSlide.length > 0) {
    $overviewSlide.owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      items: 1,
      nav: false,
      dots: true,
      dotsContainer: '.dots'
    })
    $('.owl-dot').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $overviewSlide.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  }


  /*====================================================*/
  /* STICKY NAVBAR                                      */
  /*====================================================*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $(navBar).addClass('navbar-is-sticky');
    } else {
      $(navBar).removeClass('navbar-is-sticky');
    }
  });

  $('.navbar-toggler').on('click', function (e) {
    $(this).toggleClass('menu-is-expanded');
  });

  $(document).on('click', '.navbar-collapse.show', function (e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('.navbar-toggler').toggleClass('menu-is-expanded');
      // $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
    }
  });

/*====================================================*/
  /* NAVBAR ON SCROLL EASING                            */
  /*====================================================*/
  $(navbarLinks).on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });


  /*====================================================*/
  /* TOOL TIPS INIT                                   */
  /*====================================================*/
  $('[data-toggle="tooltip"]').tooltip();

  /*====================================================*/
  /* TABS INIT                                   */
  /*====================================================*/
  $('.js-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  /*====================================================*/
  /* VIDEO MODALS                                           */
  /*====================================================*/

  $('.js-video-modal-trigger').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });
}) (jQuery);

