/* main.js */
/* 화면 위로 올라가는거 없애는방법 */
const moreBtn = document.querySelector('.more');

moreBtn.addEventListener('click', function(e) {
  e.preventDefault(); // 페이지 위로 올라가는 기본 동작 막기
  // 여기에 원하는 동작 넣기
});

/* 버튼을 눌렀을때 제품 보이게하기 */
document.addEventListener("DOMContentLoaded", function () {
  const targetIds = ["new", "brand", "kids", "sale", "season", "sportsset"];

  targetIds.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const buttons = section.querySelectorAll(".category .gender");
    const swipers = section.querySelectorAll(".swiper"); // <-- 중요

    if (!buttons.length || !swipers.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        swipers.forEach(swiper => swiper.style.display = "none");

        const type = [...btn.classList].find(cls =>
          ["man", "girl", "kids", "sports"].includes(cls)
        );

        const targetSwiper = section.querySelector(`.${type}_swiper`);
        if (targetSwiper) targetSwiper.style.display = "block";
      });
    });

    // 기본: 첫 번째 버튼 클릭
    buttons[0].click();
  });
});