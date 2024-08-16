const img1 = document.getElementById("img-1");
const bannerBtn = document.getElementById("banner-btn");
const openBtn = document.getElementById("open-btn");
const openContent = document.querySelector(".open-content");

// TODO (待解決) perf 一進頁面的 #hash scroll bug
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
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

scroll.on("scroll", (args) => {
  if (typeof args.currentElements["img1-title"] === "object") {
    let progress = args.currentElements["img1-title"].progress;
    console.log(progress);
  }
});
