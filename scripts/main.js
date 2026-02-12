const yesItem = document.querySelector("#yesItem");
const gif = document.querySelector("#gif_container");

yesItem.addEventListener("mouseenter", () => {
  yesItem.classList.add("grow");
});

yesItem.addEventListener("mouseleave", () => {
  yesItem.classList.remove("grow");
});

yesItem.addEventListener("click", () => {
  gif.classList.remove("hidden");
})

const noItem = document.querySelector("#noItem");
const wrapper = document.querySelector(".btn_wrapper");

function moveNoButton() {
  const padding = 8;

  const wRect = wrapper.getBoundingClientRect();
  const nRect = noItem.getBoundingClientRect();

  const maxLeft = wRect.width - nRect.width - padding;
  const maxTop  = wRect.height - nRect.height - padding;

  const left = Math.floor(Math.random() * (maxLeft - padding + 1)) + padding;
  const top  = Math.floor(Math.random() * (maxTop  - padding + 1)) + padding;

  noItem.style.left = `${left}px`;
  noItem.style.top = `${top}px`;
  noItem.style.transform = "none"; // stop centering after first move
}

noItem.addEventListener("mouseenter", moveNoButton);

