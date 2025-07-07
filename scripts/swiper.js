/* swiper.js */
/* ----------------------1행 */
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
/* ----------------------2행 */
/* 2행,6행,7행 스와이퍼 */
const newSwiper = new Swiper('#new_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
const kidsSwiper = new Swiper('#kids_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
const saleSwiper = new Swiper('#sale_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
const summerSwiper = new Swiper('#summer_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
const runnerSwiper = new Swiper('#runner_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
