    const swiper = new Swiper('.swiper', {
        loop: true,
        //slidesPerView:1,
        spaceBetween:20,
        // Responsive breakpoints
        breakpoints: {
          300: {
            slidesPerView: 1
          },
          // when window width is >= 320px
          700: {
            slidesPerView: 2
          },
          // when window width is >= 480px
          1330: {
            slidesPerView: 3
          }
        },
      
        // If we need pagination
        pagination: {
          el: '.pagination',
          bulletClass:'pagination__button',
          bulletActiveClass:'pagination__button--active',

        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.carusel-button.next',
          prevEl: '.carusel-button.prev',
        }
    
    }    )