document.querySelectorAll("a")

forEach((a) => {
    a.addEventListener("click", (e) => {
        if (a.getAttribute("href") == "#") {e.preventDefault();}
        /* a의 주소가 #과 같다면 이동을 막는다 */
    });
});