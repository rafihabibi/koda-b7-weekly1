function cekPalindrom(kata) {
    let teksKecil = kata.toLowerCase();
    let kataDibalik = teksKecil.split('').reverse().join('');

    if(kataDibalik === teksKecil) {
        return "Palindrom";
    } else {
        return "Bukan Palindrom";
    }
}
let hasil = cekPalindrom("Malam");
console.log(`Aapakah ini Palindrom:${hasil}`);

