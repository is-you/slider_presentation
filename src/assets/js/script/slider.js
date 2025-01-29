function initSlider() {
    const slider_el = document.querySelector('.mySwiper');
    const zoom_el = document.querySelector('.zoom_wrapper');

    const swiper = new Swiper(slider_el, {
        allowTouchMove: false,
        simulateTouch: false,
    });
    console.log(zoom_el, Panzoom);

    slider_el.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('js-slide-to')) return;
        const slide_index = parseInt(target.dataset.slideTo);
        swiper.slideTo(slide_index);
    });

    swiper.on('slideChange', (e) => {
        const current_slide = swiper.slides[swiper.activeIndex];
        if (!current_slide.dataset.sliderType) return;
        setTimeout(()=> {
            const slide_index = parseInt(current_slide.dataset.slideTo);
            swiper.slideTo(slide_index);
        }, 2000);
    });

    const panzoom = Panzoom(zoom_el, {disableXAxis: true, disableYAxis: true, minZoom: 1});
    swiper.slideTo(1);
}

initSlider();


