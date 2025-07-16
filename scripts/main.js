/* main.js */


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