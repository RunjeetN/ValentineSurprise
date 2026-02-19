const yesItem = document.querySelector("#yesItem");
const noItem = document.querySelector("#noItem");
const wrapper = document.querySelector(".btn_wrapper");

const gif = document.querySelector("#gif_container");
const screen1 = document.querySelector(".screen1"); // was #screen1 (doesn't exist)

// --- YES button: hover on mouse, toggle on touch ---
yesItem.addEventListener("pointerenter", (e) => {
  if (e.pointerType === "mouse") yesItem.classList.add("grow");
});

yesItem.addEventListener("pointerleave", (e) => {
  if (e.pointerType === "mouse") yesItem.classList.remove("grow");
});

// On touch, there is no hover, so allow tap to grow
yesItem.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") yesItem.classList.add("grow");
});

// Click to reveal gif screen
const textContainer = document.querySelector(".text_container");
const btnWrapper = document.querySelector(".btn_wrapper");

yesItem.addEventListener("click", () => {
  gif.classList.remove("hidden");      // show gif
  btnWrapper.classList.add("hidden");    // hide buttons
});

// --- NO button: move within wrapper ---
function moveNoButton() {
  const padding = 10;

  const wRect = wrapper.getBoundingClientRect();
  const nRect = noItem.getBoundingClientRect();

  const maxX = wRect.width - nRect.width - padding;
  const maxY = wRect.height - nRect.height - padding;

  // If the wrapper is too small, don't try to move (prevents NaN / weird jumps)
  if (maxX <= padding || maxY <= padding) return;

  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noItem.style.transform = `translate(${x}px, ${y}px)`;
}

// Mouse hover
noItem.addEventListener("pointerenter", (e) => {
  if (e.pointerType === "mouse") moveNoButton();
});

// Touch tap
noItem.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") moveNoButton();
});
