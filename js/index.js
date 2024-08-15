const img1 = document.getElementById("img-1");
const bannerBtn = document.getElementById("banner-btn");
const openBtn = document.getElementById("open-btn");
const openContent = document.querySelector(".open-content");

// TODO perf 一進頁面的 #hash scroll bug
window.addEventListener("load", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    reloadOnContextChange: true,
  });

  bannerBtn.addEventListener("click", () => {
    scroll.scrollTo(img1);
  });

  openBtn.addEventListener("click", () => {
    if (!openContent.classList.contains("hide")) return;

    openContent.classList.remove("hide");
    scroll.update();
    scroll.scrollTo(openContent);
  });
});
