const yesItem = document.querySelector("#yesItem");

yesItem.addEventListener("mouseenter", () => {
  yesItem.classList.add("grow");
});

yesItem.addEventListener("mouseleave", () => {
  yesItem.classList.remove("grow");
});


const noItem = document.querySelector("#noBtn");

noItem.addEventListener("mouseenter", () => {
    noItem.classList.add("move");
});