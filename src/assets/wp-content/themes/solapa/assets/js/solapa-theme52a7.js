(function ($) {
  "use strict";


  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      $("html, body").animate({
          scrollTop: $(target).offset().top,
        },
        1000
      );
      return false;
    });
  }
  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500);
    }
  }



  $("ul.sub-menu").parent().addClass("dropdown");
  $("ul#menuid li.dropdown a").addClass("dropdown-toggle");
  $("ul.sub-menu li a").removeClass("dropdown-toggle");
  $('.navbar .dropdown-toggle').append('');
  $('a.dropdown-toggle').attr('data-toggle', 'dropdown');



  // Update Header Style and Scroll to Top
  function headerStyle() {

    $(window).on("scroll", function () {
      if ($(".main-header").length) {
        var headerScrollPos = 130;
        var stricky = $(".main-header");
        if ($(window).scrollTop() > headerScrollPos) {
          stricky.addClass("fixed-header");
        } else if ($(this).scrollTop() <= headerScrollPos) {
          stricky.removeClass("fixed-header");
        }
      }

    });

  }

  headerStyle();

  // Submenu Dropdown Toggle
  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

    //Dropdown Button
    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Dropdown Menu / Fullscreen Nav
    $('.fullscreen-menu .navigation li.dropdown > a').on('click', function () {
      $(this).next('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown > a').on('click', function (e) {
      e.preventDefault();
    });

    //Disable dropdown parent link
    $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function (e) {
      e.preventDefault();
    });

    $('.main-header__cart-box .dropdown-menu').click(function (e) {
      e.stopPropagation();
    });

  }

  // Mobile Nav Hide Show
  if ($('.mobile-menu').length) {

    //$('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu__navigation').html();
    $('.mobile-menu .mobile-menu__box .mobile-menu__outer').append(mobileMenuContent);
    $('.sticky-header .main-menu__navigation').append(mobileMenuContent);

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
      $(this).toggleClass('open');
      $(this).prev('ul').slideToggle(500);
    });
    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');
    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
    });

  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }



  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "90";
        } else {
          var headerH = "90";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate({
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            1200,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }


  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }

    OnePageMenuScroll();
  });

  //Header Search
  if ($('.header-search__box').length) {
    $('.header-search__box').on('click', function () {
      $('body').addClass('search-active');
    });
    $('.close-search').on('click', function () {
      $('body').removeClass('search-active');
    });

    $('.search-popup .color-layer').on('click', function () {
      $('body').removeClass('search-active');
    });
  }



  $(window).on('load', function () {
    handlePreloader();
  });
})(jQuery);