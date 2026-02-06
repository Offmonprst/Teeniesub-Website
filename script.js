// === TOGGLE MENU ===
const menuBtn = document.getElementById("menuBtn");
const menuBox = document.getElementById("menuBox");
const loader = document.getElementById("loading-screen");
const content = document.getElementById("content");
const gallery = document.getElementById("gallery");

let apiData = null;

menuBtn.addEventListener("click", () => {
    menuBox.classList.toggle("active");
});

// === LOAD EPISODES ===
function loadApis() {
    if (!apiData || !apiData.gallery || apiData.gallery.length === 0) {
        gallery.innerHTML = '<p class="text-center text-blue-400">No data available.</p>';
        return;
    }

    let html = ''; // RESET HTML

    apiData.gallery.forEach(item => {
        html += `
        <a href="https://indo.teeniesubs.xyz${item.url}" class="photo-card">
            <img src="${item.image}" alt="Episode ${item.episode}">
            <h3>Eps: ${item.episode} || ${item.title}</h3>
            <p>${item.date}</p>
        </a>
        `;
    });

    gallery.innerHTML = html;
}

// === FETCH JSON SAAT PAGE LOAD ===
document.addEventListener('DOMContentLoaded', () => {
    fetch('/Episode.json')
        .then(res => {
            if (!res.ok) throw new Error('Failed to load Episode.json');
            return res.json();
        })
        .then(data => {
            apiData = data;
            loadApis();
        })
        .catch(err => {
            console.error(err);
            gallery.innerHTML = '<p class="text-center text-red-400">Gagal memuat data episode.</p>';
        });
});

// === LOADING SCREEN ===
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
            if (location.pathname !== "/Episode") {
		    history.pushState(null, "", "/Episode");
			}
        }, 800);
    }, 3000);
});