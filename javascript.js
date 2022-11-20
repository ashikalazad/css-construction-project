(function ($) {
  $(document).ready(function () {
    
    // $(".owl-carousel").owlCarousel({

    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
    });

    // $(".counter").counterUp({

    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // for to-top buttom

    $(".to-top a").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });

    // for to-top button heid and show

    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        $(".to-top a").show();
      } else {
        $(".to-top a").hide();
      }
    });

  });
})(jQuery);
