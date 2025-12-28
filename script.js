// === TOGGLE MENU ===
const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");
const loader = document.getElementById("loading-screen");
const content = document.getElementById("content");
const gallery = document.getElementById('gallery');

let apiData = null;
let html = '';

menuBtn.addEventListener("click", () => {
    menuBox.classList.toggle("active");
});

function loadApis() {
	if (!apiData || !apiData.categories) {
                gallery.innerHTML = '<p class="text-center text-blue-400">No API data loaded.</p>';
                return;
            }
            apiData.gallery.forEach((category) => {
            html += `
        <a href="https://teeniesubs.xyz${category.url}"class="photo-card">
            <img src="${category.image}" alt="">
            <h3>Eps: ${category.episode} || ${category.title}</h3>
            <p>${category.date}</p>
        </a>`
}

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 800);
    }, 3000);
});

document.addEventListener("click", e => {
        document.addEventListener('DOMContentLoaded', () => {
            fetch('Episode.json')
                .then(res => {
                    if (!res.ok) throw new Error('Failed to load apis.json');
                    return res.json();
                })
                .then(data => {
                    apiData = data;
                    loadApis();
                })
                .catch(err => {
                    console.error(err);
                    gallery.innerHTML = '<p class="text-center text-red-400">Gagal memuat data API. Cek iyah.json di server.</p>';
                });
        });