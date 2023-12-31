(function($) { "use strict";
  const testimonialSliderTwo = new Swiper('.testimonial-slider-two', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,

    controller: {
      inverse: true,
    },

    navigation: {
      nextEl: '.testi2-next',
      prevEl: '.testi2-prev',
    },
  });
  const testimonialThumbSlider = new Swiper('.testimonial-thumb', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 1,
    loop: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'horizontal',

    controller: {
      inverse: true,
    },
    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 3
      },
      992:{ 
        slidesPerView: 3,
        direction: 'vertical',
      },
    
    }
  });
  
  testimonialSliderTwo.controller.control = testimonialThumbSlider;
  testimonialThumbSlider.controller.control = testimonialSliderTwo;
  
 

}(jQuery));