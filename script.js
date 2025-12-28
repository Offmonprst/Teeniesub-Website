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

fetch('https://teeniesubs.xyz/Episode.json')
  .then(res => res.json())
  .then(data => {
    data.gallery.forEach((item) => {
      card.href = 'https://teeniesubs.xyz' + item.url;
      card.className = 'photo-card';
       html += `
        <img src="${item.image}" alt="Episode ${item.episode}">
        <h3>Eps: ${item.episode.toString().padStart(2, '0')} || ${item.title}</h3>
        <p>${item.date}</p>
      `;
    });
     gallery.innerHTML = html;
  })
  .catch(err => {
    console.error('Gagal load episode:', err);
    gallery.innerHTML = '<p class="text-center text-red-400">Gagal memuat data API. Cek Episode.json di server.</p>';
  });

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
        }, 800);
    }, 3000);
});
