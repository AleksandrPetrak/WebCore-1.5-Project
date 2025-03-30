const readMoreBtn = document.querySelector('.brands-list__read-more-btn');
const brandsList = document.querySelector('.brands-list__list');

readMoreBtn.addEventListener('click', function () {
    if (!brandsList.classList.contains('brands-list__list--all-visible')) {
        brandsList.classList.add('brands-list__list--all-visible');
        readMoreBtn.textContent = 'Скрыть';
        readMoreBtn.classList.add('brands-list__read-more-btn--rotated');
    } else {
        brandsList.classList.remove('brands-list__list--all-visible');
        readMoreBtn.textContent = 'Показать все';
        readMoreBtn.classList.remove('brands-list__read-more-btn--rotated');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        new Swiper('.brands-slider', {
            spaceBetween: 16,
            width: 240,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    } else {
        // и похоже на то, что элс можно и убрать))
        const swiperInstance = document.querySelector('.brands-slider').swiper;
            if (swiperInstance) {
                swiperInstance.destroy();   
            }
    }
});