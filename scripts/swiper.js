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
/* 상품 스와이퍼 */
const newSwiper = new Swiper('.new_swiper', {
    slidesPerView:'auto',
    spaceBetween:15,
    centeredSlides: false,
    slidesOffsetLeft: 70,
})
/* 반복 데이터 */
