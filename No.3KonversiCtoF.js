function konversiCF(celcius){
  let fahrenheit = 0;
  fahrenheit = celcius * 1.8 + 32
  return fahrenheit;
  
}

let suhuC = 26;
let konversi = `Setelah di Konversi C ke F: ${konversiCF(suhuC)}`
console.log(konversi)