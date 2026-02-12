const yesItem = document.querySelector("#yesItem");
const gif = document.querySelector("#gif_container");
const screen1 = document.querySelector("#screen1");

yesItem.addEventListener("mouseenter", () => {
  yesItem.classList.add("grow");
});

yesItem.addEventListener("mouseleave", () => {
  yesItem.classList.remove("grow");
});

yesItem.addEventListener("click", () => {
  gif.classList.remove("hidden");
  screen1.classList.add("hidden");
})

const noItem = document.querySelector("#noItem");
const wrapper = document.querySelector(".btn_wrapper");

let currentX = 0;
let currentY = 0;

function moveNoButton() {
  const padding = 8;

  const wRect = wrapper.getBoundingClientRect();
  const nRect = noItem.getBoundingClientRect();

  // allowable translate range inside wrapper
  const maxX = wRect.width - nRect.width - padding;
  const maxY = wRect.height - nRect.height - padding;

  // pick a new translate (within wrapper)
  currentX = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  currentY = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noItem.style.transform = `translate(${currentX}px, ${currentY}px)`;
}

noItem.addEventListener("mouseenter", moveNoButton);
