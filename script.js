// script.js

// Mengambil elemen modal dan tombol
const contributeBtn = document.getElementById('contributeBtn');
const contributeModal = document.getElementById('contributeModal');
const closeModalBtn = document.getElementById('closeModal');
const closeSpan = document.getElementsByClassName('close')[0];

// Fungsi untuk menampilkan modal
contributeBtn.onclick = function() {
    contributeModal.style.display = "block"; // Tampilkan modal
}

// Fungsi untuk menutup modal
closeModalBtn.onclick = function() {
    contributeModal.style.display = "none"; // Sembunyikan modal
}

// Menutup modal saat mengklik di luar modal
window.onclick = function(event) {
    if (event.target === contributeModal) {
        contributeModal.style.display = "none"; // Sembunyikan modal
    }
}

// Menutup modal saat mengklik tombol close
closeSpan.onclick = function() {
    contributeModal.style.display = "none"; // Sembunyikan modal
}
