const h1 = document.querySelector(".animation-h1");
const p = document.querySelector(".animation-p");
const btn = document.querySelector(".animation-btn");
const x = [h1, p, btn];
const img = document.querySelector(".animation-image");
const icon = document.querySelectorAll(".icon");
const logo = document.querySelector(".logo");

anime({
  targets: logo,
  translateX: [
    { value: -100, duration: 0 },
    { value: 0, duration: 1500 },
  ],
});

anime({
  targets: img,
  easing: "linear",
  translateX: [
    { value: -100, duration: 0 },
    { value: 0, duration: 700 },
  ],
  opacity: [
    { value: 0, duration: 0 },
    { value: 1, duration: 700 },
  ],
  delay: 500,
});

anime({
  targets: x,
  easing: "easeInQuad",
  translateY: [
    { value: 20, duration: 0 },
    { value: 0, duration: 500 },
  ],
  opacity: [
    { value: 0, duration: 0 },
    { value: 1, duration: 900 },
  ],
  delay: anime.stagger(200, { start: 500 }),
});

anime({
  targets: icon,
  translateY: [
    { value: 100, duration: 0 },
    { value: 0, duration: 500 },
  ],
  rotate: 360,
  duration: 2500,
  delay: anime.stagger(100, { start: 2000 }),
});
