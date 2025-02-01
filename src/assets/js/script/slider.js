function initSlider() {
    const slider_el = document.querySelector('.mySwiper');
    const zoom_el = document.querySelector('.panzoom');

    const swiper = new Swiper(slider_el, {
        allowTouchMove: false,
        simulateTouch: false,
    });

    slider_el.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('js-slide-to')) return;
        const slide_index = parseInt(target.dataset.slideTo);
        if (slide_index === 7) {
            document.querySelector('.js-img-1').style.display = 'block';
            document.querySelector('.js-img-2').style.display = 'none';
            document.querySelector('.js-img-header').src = '/fksp/img/tap2-3a.jpg';
            document.querySelector('.js-img-footer').src = '/fksp/img/tap2-3b.jpg';
        }
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

    const panzoom = Panzoom(zoom_el, {contain: 'outside', disableXAxis: false, disableYAxis: false, minScale: 1});

    zoom_el.addEventListener('touchend', handleTouchEnd);
    zoom_el.addEventListener('touchcancel', handleTouchEnd);

    function handleTouchEnd(event) {
        panzoom.reset();
        console.log('Касание завершено');
    }

    swiper.slideTo(1);


    document.querySelector('.js-set-img-1').addEventListener('click', ()=> {
        document.querySelector('.js-img-1').style.display = 'block';
        document.querySelector('.js-img-2').style.display = 'none';
        document.querySelector('.js-img-header').src = '/fksp/img/tap2-3a.jpg';
        document.querySelector('.js-img-footer').src = '/fksp/img/tap2-3b.jpg';
    });
    document.querySelector('.js-set-img-2').addEventListener('click', ()=> {
        document.querySelector('.js-img-2').style.display = 'block';
        document.querySelector('.js-img-1').style.display = 'none';
        document.querySelector('.js-img-header').src = '/fksp/img/tap2-3c.jpg';
        document.querySelector('.js-img-footer').src = '/fksp/img/tap2-3d.jpg';
    });
}

initSlider();


