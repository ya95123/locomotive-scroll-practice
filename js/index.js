const img1 = document.getElementById("img-1");
const bannerBtn = document.getElementById("banner-btn");
const openBtn = document.getElementById("open-btn");
const openContent = document.querySelector(".open-content");

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

bannerBtn.addEventListener("click", () => {
  scroll.scrollTo(img1);
});

openBtn.addEventListener("click", () => {
  openContent.classList.remove("hide");
  scroll.update();
  scroll.scrollTo(openContent);
});
