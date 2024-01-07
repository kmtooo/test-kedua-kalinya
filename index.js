$(function () {
  var navEl = $(".navbar");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 56) {
      navEl.addClass("navbar-scrolled");
    } else {
      navEl.removeClass("navbar-scrolled");
    }
  });
});
