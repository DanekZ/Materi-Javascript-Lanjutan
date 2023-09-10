// function createButton(){
//    const button = document.createElement('button');
//    let isi = document.getElementById('isi');
//    button.textContent = "click disini";
//    document.body.appendChild(button);


//    let counter = 0 ;
//    button.addEventListener('click', function(){
//       counter++;
//       isi.textContent = counter;
//    });
// }

// createButton();

function hitung(angka){
   let hasil = 0;
   for(let i = 0; i < angka.length ; i++){
      hasil += angka[i] * angka[i];
   }
   return hasil;
};

console.log(hitung([1,2,2]))


