/* main.js */


/* 버튼을 눌렀을때 제품 보이게하기 */
document.addEventListener("DOMContentLoaded", function () {
  const targetIds = ["new", "brand", "kids", "sale", "season", "sportsset"];

  targetIds.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const buttons = section.querySelectorAll(".category .gender");
    const sportsButtons = section.querySelectorAll(".category .sports");
    const swipers = section.querySelectorAll(".swiper"); // <-- 중요

    if (!buttons.length || !swipers.length) return;

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        swipers.forEach(swiper => swiper.style.display = "none");

        const type = [...btn.classList].find(cls =>
          ["man", "girl", "kids"].includes(cls)
        );

        const targetSwiper = section.querySelector(`.${type}_swiper`);
        if (targetSwiper) targetSwiper.style.display = "block";
      });
    });

    // 기본: 첫 번째 버튼 클릭
    buttons[0].click();
  });
});

/* category중n을 클릭 했을 때 container중 n이 나타난다 만약다르다면 보이지 않게 한다. */
/* ifelse문을 사용한다 */