function penghitungWaktu(n){
  let detik = 1;
  let stopCounting = setInterval(function () {
     console.log(detik);
      if(detik > n){
        console.log("STOP.");
        clearInterval(stopCounting);
      } else {
        detik++;
      }
  }, 1000);
}
penghitungWaktu(3);