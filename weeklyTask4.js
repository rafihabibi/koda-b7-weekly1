//find() Mencari satu data spesifik
let object = [
    {id:1, nama: "Harefah"}, {id: 2, nama: "listy"}
];

const mencariData = object.find((user) => user.id === 1);
console.log(mencariData);

// every() memastikan semua data memenuhi syarat
let daftarEmail = ["email123@email.com", "gmail@email.com", "mailmail.com"];
const validData = daftarEmail.every((email) => email.includes("@"));
console.log(validData);

//reduce() mengumpulkan data menjadi satu nilai
let dataAngka = [4,3,2,5];
const nilai = dataAngka.reduce((akumulator, nilaiSekarang) => {
    return akumulator + nilaiSekarang;
}, 0);
console.log(nilai);

//includes() mengecek kata dalam teks
let kataTeks = "Nama saya budi, saya tinggal di Jakarta";
const mengecekKata = kataTeks.includes("saya");
console.log(mengecekKata);

//Sort() Mnegurutkan data
const name = ["john", "ed", "data"];
name.sort();
console.log(name);

