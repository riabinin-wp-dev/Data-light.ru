// document.addEventListener('DOMContentLoaded', () => {
//     const swiper = new Swiper('.swiper__main', {
//         slidesPerView: 4,      // Количество слайдов на странице
//         spaceBetween: 16,      // Отступ между слайдами в пикселях
//         loop: true,            // Включение циклического режима
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         breakpoints: {
//             // when window width is >= 320px
//             100: {
//                 slidesPerView: 1,
//                 spaceBetween: 50,
//             },
            
//             650: {
//                 slidesPerView: 2,
//                 spaceBetween: 50,
//             },
//             768: {
//                 spaceBetween: 30,
//                 slidesPerView: 2,
//             },
//             // when window width is >= 480px
//             1000: {
//                 spaceBetween: 30,
//                 slidesPerView: 3,
//             },
//             // when window width is >= 640px
//             1200: {
//                 spaceBetween: 16,
//                 slidesPerView: 4,
//             }
//         }
//     });

// });
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Добавляем событие клика на каждую кнопку
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активные классы
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.style.opacity = '0';
                setTimeout(() => {
                    content.classList.remove('active');
                }, 150);
            }
            );

            // Добавляем активные классы для выбранного таба и контента
            button.classList.add('active');
            setTimeout(() => {
                document.getElementById(button.getAttribute('data-tab')).classList.add('active');
                setTimeout(() => {
                    document.getElementById(button.getAttribute('data-tab')).style.opacity = '1';
                }, 150);
            }, 150);
        });
    });
});

