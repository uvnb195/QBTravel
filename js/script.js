 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    freeMode: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        950: {
          slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
  },

  });

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
