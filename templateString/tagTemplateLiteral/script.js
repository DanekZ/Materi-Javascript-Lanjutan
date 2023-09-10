const nama = "zidane abbas";
const umur = 21;


function coba(strings, ...values){
   // let hasil = '';

   // strings.forEach((string, i) => {
   //    hasil += `${string} ${values[i] || ''}`;
   // });

   // return hasil

   return strings.reduce((string, value, i) =>  string += `${value} <span class="sp">${values[i] || ''}</span>`, '');
}


// console.log(coba`nama saya ${nama}, umur saya ${umur} tahun`);
const tes = coba`nama saya ${nama}, umur saya ${umur} tahun`;
document.body.innerHTML = tes;
