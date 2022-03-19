jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper
  jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
    // copy start
    let swipeOption = {
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
    new Swiper(".swiper-container", swipeOption);
    // copy end
  });
});
