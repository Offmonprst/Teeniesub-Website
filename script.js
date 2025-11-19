// === TOGGLE MENU ===
const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");

menuBtn.addEventListener("click", () => {
    menuBox.classList.toggle("active");
});


// === GRID MODE ===
const gridBtn = document.getElementById("gridBtn");
const gallery = document.getElementById("gallery");

gridBtn.addEventListener("click", () => {
    gallery.classList.toggle("grid-active");
});


// === DARK MODE ===
const settingBtn = document.getElementById("settingBtn");

// Load saved preference
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

settingBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Save mode
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});