const nama = "Ayu";           // teks
const jumlahProyek = 3;       // angka, bukan "3"
let pilihanAktif = "semua";   // akan berubah saat disaring

console.log(typeof nama);          // "string"
console.log(typeof jumlahProyek);  // "number"
console.log(typeof belumDibuat);   // undefined

const profil = {
  nama: "Adnan Hanif Riandito",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const kalimat = 
    `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
    console.log(kalimat);
