/* ----------------------1행 스와이퍼 */
const bestSwiper = new Swiper('#best',{
    loop:true,/* 계속 반복 */
    autoplay:{delay:3000},/* 3초마다 */
    direction:'horizontal',/* 수평방향으로 슬라이드 */
    /* 3초마다 수평방향으로 슬라이드가 반복된다 */
    navigation:{
        /* 화살표를 클릭했을때도 넘어갈 수 있도록 설정 */
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'fraction',
    },
})
/* -----------------------2행 상품 */
/* 상품 스와이퍼 */
const newSwiper = new Swiper('#new_product',{
    direction:'horizontal',
    slidesPerView:5,
    centerSlider:true,
})
/* 반복 데이터 */
