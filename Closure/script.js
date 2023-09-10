// function init(){
//    function tampilNama(nama) {
//       console.log(nama);
//    }

//    return tampilNama;
// }

// cara ringkas

// function init(){
//    return function tampilNama(nama){
//       console.log(nama)
//    }
// }


// let getTampilNama = init();

// function ucapkanSalam(waktu){
//    return function(nama){
//       console.log(`halo ${nama}, selamat ${waktu}`);
//    }
// }

// let ucapkanSalamMalam = ucapkanSalam('malam');
// ucapkanSalamMalam('zidane');

let add = (function(){
   let counter =  1;
   return function (){
      return counter++;   }
})();

let looping = parseInt(prompt('looping berapa '));
for(i = 1 ; i <= looping ; i++){
   console.log(add());
}

