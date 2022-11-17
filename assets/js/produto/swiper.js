const mainProduct = new Swiper("main .product .mySwiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
})

const mainProductThumbs = new Swiper("main .product .mySwiper1", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
})

const similarProducts = new Swiper("main .product .similarProducts", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 8,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  spaceBetween: 30,
})
