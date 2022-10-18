const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu-links");
const tagLine = document.querySelector(".tagline");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const beer = document.querySelector(".beer");

const timeLine = gsap.timeline({ defaults: { duration: 0.5, autoAlpha: 0 } });

timeLine
  .from(logo, { x: -50 })
  .from(menu, { x: -200, duration: 0.8 }, "<")
  .from(title, { duration: 0.5 })
  .from(tagLine, { y: 100 }, "<+0.2")
  .from(desc, { y: 100 }, "<")
  .from(beer, { y: -200, duration: 1 }, "+=0.5");
