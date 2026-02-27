function konversiCF(celcius){
  let fahrenheit = 0;
  fahrenheit = celcius * 1.8 + 32;
  return fahrenheit;
  
}

let suhuC = 29;
let konversi = `Setelah di Konversi C ke F: ${Math.floor(konversiCF(suhuC))}°`;
console.log(konversi);
