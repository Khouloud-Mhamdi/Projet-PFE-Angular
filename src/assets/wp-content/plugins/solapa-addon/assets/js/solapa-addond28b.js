(function ($) {
  "use strict";

  var WidgetDefaultHandler = function ($scope) {
    // if ($scope.find(".wow").length) {
    //     var wow = new WOW({
    //         boxClass: "wow", // animated element css class (default is wow)
    //         animateClass: "animated", // animation css class (default is animated)
    //         mobile: true, // trigger animations on mobile devices (default is true)
    //         live: true // act on asynchronously loaded content (default is true)
    //     });
    //     wow.init();
    // }

    let mainSliderTwoImage = $scope.find(".main-slider-two__img");
    if (mainSliderTwoImage.length) {
      mainSliderTwoImage.tilt({
        maxTilt: 5,
        scale: 1,
        perspective: 700,
        speed: 1000,
      });
    }

    let tabsBox = $scope.find(".tabs-box");
    if (tabsBox.length) {
      tabsBox.find(".tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          target
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn");
          $(this).addClass("active-btn");
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .fadeOut(0);
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab");
          $(target).fadeIn(300);
          $(target).addClass("active-tab");
        }
      });
    }

    let thmSwiperSliders = $scope.find(".thm-swiper__slider");
    if (thmSwiperSliders.length) {
      thmSwiperSliders.each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(
          elm,
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlCarousels = $scope.find(".thm-owl__carousel");
    if (thmOwlCarousels.length) {
      thmOwlCarousels.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlNavCarousels = $scope.find(".thm-owl__carousel--custom-nav");
    if (thmOwlNavCarousels.length) {
      thmOwlNavCarousels.each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }

    let circleProgress = $scope.find(".circle-progress");
    if (circleProgress.length) {
      circleProgress.appear(function () {
        let circleProgressItem = $(".circle-progress");
        circleProgressItem.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }

    let videoPopup = $scope.find(".video-popup");
    if (videoPopup.length) {
      videoPopup.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
      });
    }

    //LightBox / Fancybox
    let ImagePopup = $scope.find(".lightbox-image");
    if (ImagePopup.length) {
      $(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
          media: {},
        },
      });
    }

    let imgPopup = $scope.find(".img-popup");
    if (imgPopup.length) {
      var groups = {};
      imgPopup.each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true,
          },
        });
      });
    }

    // Popular Causes Progress Bar
    let countBar = $scope.find(".count-bar");
    if (countBar.length) {
      countBar.appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }

    //Fact Counter + Text Count
    let countBox = $scope.find(".count-box");
    if (countBox.length) {
      countBox.appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }

    //Jquery Knob animation
    let dial = $scope.find(".dial");
    if (dial.length) {
      dial.appear(
        function () {
          var elm = $(this);
          var color = elm.attr("data-fgColor");
          var perc = elm.attr("value");
          var thickness = elm.attr("data-thickness");

          elm.knob({
            value: 0,
            min: 0,
            max: 100,
            skin: "tron",
            readOnly: true,
            thickness: thickness,
            dynamicDraw: true,
            displayInput: false,
          });

          $({
            value: 0,
          }).animate(
            {
              value: perc,
            },
            {
              duration: 2000,
              easing: "swing",
              progress: function () {
                elm.val(Math.ceil(this.value)).trigger("change");
              },
            }
          );
        },
        {
          accY: 0,
        }
      );
    }

    var odo = $scope.find(".odometer");
    if (odo.length) {
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    //Progress Bar
    var progress = $scope.find(".progress-line");
    if ($(progress).length) {
      $(".progress-line").appear(
        function () {
          var el = $(this);
          var percent = el.data("width");
          $(el).css("width", percent + "%");
        },
        {
          accY: 0,
        }
      );
    }

    //Accordion Box
    var accordion = $scope.find(".faq-one__accordion");
    if ($(accordion).length) {
      $(".faq-one__accordion").on("click", ".faq-one__acc-btn", function () {
        var outerBox = $(this).parents(".faq-one__accordion");
        var target = $(this).parents(".faq-accordion__toggle");

        if ($(this).hasClass("active") !== true) {
          $(outerBox)
            .find(".faq-accordion__toggle .faq-one__acc-btn")
            .removeClass("active");
        }

        if ($(this).next(".faq-one-acc__content").is(":visible")) {
          return false;
        } else {
          $(this).addClass("active");
          $(outerBox)
            .children(".faq-accordion__toggle")
            .removeClass("active-block");
          $(outerBox)
            .find(".faq-accordion__toggle")
            .children(".faq-one-acc__content")
            .slideUp(300);
          target.addClass("active-block");
          $(this).next(".faq-one-acc__content").slideDown(300);
        }
      });
    }

    //Accordion Box
    var accordion_service_details = $scope.find(
      ".service-detail__faq-accordion"
    );
    if ($(accordion_service_details).length) {
      $(".service-detail__faq-accordion").on(
        "click",
        ".service-detail__acc-btn",
        function () {
          var outerBox = $(this).parents(".service-detail__faq-accordion");
          var target = $(this).parents(".service-detail__faq-toggle");

          if ($(this).hasClass("active") !== true) {
            $(outerBox)
              .find(".service-detail__faq-toggle .service-detail__acc-btn")
              .removeClass("active");
          }

          if ($(this).next(".service-detail__faq-content").is(":visible")) {
            return false;
          } else {
            $(this).addClass("active");
            $(outerBox)
              .children(".service-detail__faq-toggle")
              .removeClass("active-block");
            $(outerBox)
              .find(".service-detail__faq-toggle")
              .children(".service-detail__faq-content")
              .slideUp(300);
            target.addClass("active-block");
            $(this).next(".service-detail__faq-content").slideDown(300);
          }
        }
      );
    }

    //Gallery Filters
    if ($(".filter-list").length) {
      $(".filter-list").mixItUp({
        load: {
          filter: ".all", // show app tab on first load
        },
      });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).children(".filter-text").text(count);
      });
    }
  };

  var WidgetFooterSubscribeHandler = function ($scope) {
    // mailchimp form
    if ($scope.find(".mc-forml").length) {
      $(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          },
        });
      });
    }
  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/footer-subscribe.default",
      WidgetFooterSubscribeHandler
    );
  });
})(jQuery);
