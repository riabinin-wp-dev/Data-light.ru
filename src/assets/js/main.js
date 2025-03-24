import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener('DOMContentLoaded',()=>{
    const swiper = new Swiper('.swiper-info', {
        slidesPerView: 1,
        spaceBetween: 5,
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.info-button-next',
            prevEl: '.info-button-prev',
        },
<<<<<<< HEAD
        pagination: {
            el: '.info-pagination',
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            1250: {
                slidesPerView: 1,
                spaceBetween: 5
            }
=======
        // 1050: {
        //     slidesPerView: 3,
        //     spaceBetween: 10
        // },
        1250: {
            slidesPerView: 1,
            spaceBetween: 5
>>>>>>> a2f3400c60de31634a1d707a942443186cf836fa
        }
      });
})