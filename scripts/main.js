
/* 모든 a태그의 주소가 #일때 이동을 막는다. */
const links = document.querySelectorAll("a");

links.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (a.getAttribute("href") == "#") {
      e.preventDefault();
    }
  });
});

/* man, girl, kids 탭 */
const buttons = document.querySelectorAll('.tap');/* 모든 공통class이름이 tap */
const swipers = document.querySelectorAll('.swiper');/* 모든 공통class이름이 swiper */

// 공통클래스 tap중 n번째가 클릭되면 swiper의 n번째를 보여줘라
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 모든 콘텐츠 숨기기
    swipers.forEach(swiper => swiper.style.display = 'none');
    // 현재 인덱스에 해당하는 콘텐츠만 보이기
    swipers[index].style.display = 'block';

    // 선택된 버튼 강조
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});