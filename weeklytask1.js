function cekPalindrom(kata) {
    let kataKecil = kata.toLowerCase();
    let balikKata = kata.split('').reverse().join('');

    if(kataKecil === balikKata){
        return true;
    } else {
        return  false;
    }
}

console.log(cekPalindrom("farah"));