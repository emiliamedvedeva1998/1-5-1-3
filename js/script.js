// const makeSwiper = () => {

// return new Swiper('.link-slider', {

//      pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     simulateTouch: true,

//     touchRatio: 1,

//     touchAngle: 45,

//     grabCursor: true,

//     slideToClickedSlide: true,

//     slideToClickedSlide: true,


//     keyboard: {

//         enabled: true,

//         onlyInViewport: true,

//         pageUpDown: true,
//     },


//     mousewheel: {
        
//         sensitivity: 1,

        
//         eventsTarget: '.link-slider',
//     },

//     breakpoints: {
//         240: {
//             slidesPerView: 0.8, 
//         },

//         280: {
//             slidesPerView: 1,
//         },

//         320: {
//             slidesPerView: 1.35,  
//         },

//         400: {
//             slidesPerView: 1.7, 
//         },
        
//         480: {
//             slidesPerView: 2, 
//         },

//         600: {
//             slidesPerView: 2.5, 
//         }, 
        
//         755: {
//             slidesPerView: 3,
//         },

//         768: {
//             initialSlide: 0,
//             spaceBetween: 0,
//             enabled: false,
//         },

//     },
    

//     watchOverflow: true,

//     spaceBetween: 16,

// });

// }

// let swiper = makeSwiper();

// window.addEventListener ('resize', function() {
//     const width = this.window.innerWidth;
//     console.log(width);
//     if(width>767){
//         if (swiper){
//             swiper.destroy()
//             swiper = null;
//         }
//     } else {
//         if (!swiper) swiper = makeSwiper()
//     }
// })

const slider = document.querySelector('.link-slider');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {

        mySwiper = new Swiper(slider, {
            loop: true,
            slideClass: 'link-slider__slide',
                 pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                simulateTouch: true,

                touchRatio: 1,

                touchAngle: 45,

                grabCursor: true,

                slideToClickedSlide: true,

                slideToClickedSlide: true,


                keyboard: {

                    enabled: true,

                    onlyInViewport: true,

                    pageUpDown: true,
                },


                mousewheel: {
        
                    sensitivity: 1,

        
                    eventsTarget: '.link-slider',
                },

                breakpoints: {
                    240: {
                        slidesPerView: 0.8, 
                    },

                    280: {
                        slidesPerView: 1,
                    },

                    320: {
                        slidesPerView: 1.35,  
                    },

                    400: {
                        slidesPerView: 1.7, 
                    },
        
                    480: {
                        slidesPerView: 2, 
                    },

                    600: {
                        slidesPerView: 2.5, 
                    }, 
        
                    755: {
                        slidesPerView: 3,
                    },

                    768: {
                        initialSlide: 0,
                        spaceBetween: 0,
                        enabled: false,
                        },


                },
    

                watchOverflow: true,

                spaceBetween: 16,
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('link-slider-initialized')) {

            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});