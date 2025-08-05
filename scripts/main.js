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

document.querySelectorAll("a")

forEach((a) => {
    a.addEventListener("click", (e) => {
        if (a.getAttribute("href") == "#") {e.preventDefault();}
        /* a의 주소가 #과 같다면 이동을 막는다 */
    });
});