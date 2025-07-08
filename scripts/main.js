/* main.js */
/* 화면 위로 올라가는거 없애는방법 */
const moreBtn = document.querySelector('.more');
const imgBtn = document.querySelector('.swiper-slide');

moreBtn.addEventListener('click', function(e) {
  e.preventDefault(); // 페이지 위로 올라가는 기본 동작 막기
  // 여기에 원하는 동작 넣기
});
imgBtn.addEventListener('click', function(z) {
  z.preventDefault(); // 페이지 위로 올라가는 기본 동작 막기
  // 여기에 원하는 동작 넣기
});