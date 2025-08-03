/* main.js */

//man ,girl, kids쪽
/* document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category .tap");
  const swipers = document.querySelectorAll(".container .swiper");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedClass = button.classList[1]; // man, girl, kids 중 하나

      swipers.forEach(swiper => {
        // 해당하는 swiper만 보여주고 나머지는 숨김
        if (swiper.classList.contains(`${selectedClass}_swiper`)) {
          swiper.style.display = "block";
        } else {
          swiper.style.display = "none";
        }
      });
    });
  });
}); */

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();/* 맨 위로 올라가는 이동 막음 */
  });
});