// === TOGGLE MENU ===
const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");

menuBtn.addEventListener("click", () => {
    menuBox.classList.toggle("active");
});
