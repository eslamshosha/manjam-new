let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();

      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }
  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html").css("scroll-behavior", "unset");
    $("html, body").animate(
      {
        scrollTop: $("#courses").offset().top - 40,
      },
      1000
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });

  const classExists =
    document.getElementsByClassName("new-address-select").length > 0;

  if (classExists) {
    $(".new-address-select").select2();
  } else {
  }
  const searchExists = document.getElementsByClassName("search-type").length > 0;

  if (searchExists) {
    $(".search-type").select2();
  } else {
  }
   $(document).on("scroll", onScroll);
  if ($(window).width() <= 991) {
    $('.big-menu a[data-href^="#"]').on("click", function (e) {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars").removeClass("open-bars");
      $("body").removeClass("overflow");
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = $(this).attr("data-href");
      menu = target;
      $target = $(target);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - 30,
          },
          500,
          "swing",
          function () {
            $(document).on("scroll", onScroll);
          }
        );
    });
    $(".big-menu a").on("click", function (e) {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars").removeClass("open-bars");
      $("body").removeClass("overflow");
    });
  }

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.header a[data-href^="#"]').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("data-href"));
      var refoffset = $(currLink.attr("data-href")).position().top - 80;
      if (
        refoffset <= scrollPos &&
        refoffset + refElement.height() + 240 > scrollPos
      ) {
        $(".header .nav-item>a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  
});
