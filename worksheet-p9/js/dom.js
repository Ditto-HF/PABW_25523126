import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;      // teks, bukan HTML
  return li;
}

daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));


const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                 // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
});

function render(daftar) {
  wadah.textContent = "";                 // 1. kosongkan lebih dulu

  if (daftar.length === 0) {              // 2. periksa keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));   // 3. isi ulang
}
