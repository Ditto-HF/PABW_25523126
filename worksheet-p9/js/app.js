const nama = "Ayu";           // teks
const jumlahProyek = 3;       // angka, bukan "3"
let pilihanAktif = "semua";   // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   // undefined

const profil = {
  nama: "Adnan Hanif Riandito",
  peran: "Mahasiswa Informatika",
  keahlian: ["Dasar HTML", "Dasar CSS", "JavaScript"],
  karya: ["Warmis", "Stress Shield"],
};

export const daftarProyek = [  
  { judul: "Stress Shield", tahun: 2025, selesai: true, kategori: "semua" },
  { judul: "WarMis", tahun: 2026, selesai: true, kategori: "data" },
  { judul: "KisahSiKecil", tahun: 2026, selesai: false, kategori: "web" },
];


const kalimat = 
    `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
    console.log(kalimat);

    // 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

const formatKarya = (daftar) => daftar.join(" . ");




console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);


//galat check
console.log(profil);
console.table(daftarProyek);
console.log(profil.karya);
//console.error(pesan);

// const profilSalinanSalah = profil;

// profilSalinanSalah.nama = "Saya";


