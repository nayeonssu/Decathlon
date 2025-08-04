/* swiper.js */

const bestSwiper = new Swiper('#best',{
    loop:true,
    autoplay:{delay:3000},
    direction:'horizontal',
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        type:'fraction',
    },
})

/* 2행,6행,7행 스와이퍼 */
const manSwiper = new Swiper('.container .swiper', {
    slidesPerView:'auto',
    spaceBetween:20,
    centeredSlides: false,
})

/* sns스와이퍼 */
const snsSwiper = new Swiper('.sns_swiper', {
    slidesPerView:4,
    spaceBetween:20,
    centeredSlides: false,
    loop:false,
    autoplay:{delay:3000},
    direction:'horizontal',
})

/* 엑티비티 스와이퍼 */
const ectiSwiper = new Swiper('.ecti_swiper', {
    slidesPerView:'auto',
    centeredSlides: false,
    spaceBetween:16,
    initialSlide: 1,
    loop:true,
    autoplay:{delay:3000},
    direction:'horizontal',
})