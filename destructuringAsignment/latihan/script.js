// Destructuring 
// function penjumlahanDanPerkalian(nilai1, nilai2){
//    return [nilai1 + nilai2, nilai1 * nilai2];
// };

// const [tambah, kali] = penjumlahanDanPerkalian(2,3);
// console.log(tambah);
// console.log(kali)
// memiliki kekurangan, yaitu variabel array nya harus berurut terhadap return di fungsinya jadi tidak bisa dinamis, gunakan objek jika ingin dinamis

// menggunakan objek
// function kalkulasi(a , b){
//    return {
//       tambah: a + b,
//       kurang: a - b,
//       kali: a * b,
//       bagi: a/b
//    }
// }

// const {tambah, kali, bagi, kurang} = kalkulasi(4,2);
// console.log(kurang)


// desctructer function arguments 
// const mhs = {
//    nama: 'zidane abbas mallaniung',
//    umur: 23,
//    email: 'danezidane@gmail.com'
// };

// function cetakMhs(nama, umur){
//    return `halo nama saya ${nama} saya berumur ${umur} tahun`;
// };

// console.log(cetakMhs(mhs.nama, mhs.umur));

// cara kedua desctructuring function arguments dengan mengirim objek langsung 
// const mhs = {
//    nama: 'zidane abbas mallaniung',
//    umur: 23,
//    email: 'danezidane@gmail.com'
// };

// function cetakMhs(mhs){
//    return `halo nama saya ${mhs.nama} saya berumur ${mhs.umur} tahun`;
// };

// console.log(cetakMhs(mhs));

// cara ketiga yaitu dengan mengirim arguments kemudian saat di parameter fungction langsung dipecah 
// const mhs = {
//    nama: 'zidane abbas mallaniung',
//    umur: 23,
//    email: 'danezidane@gmail.com'
// };

// function cetakMhs({nama, umur}){
//    return `halo nama saya ${nama} saya berumur ${umur} tahun`;
// };

// console.log(cetakMhs(mhs));

// desctructuring argument di dalam function 
const mhs = {
   nama: 'zidane abbas mallaniung',
   umur: 23,
   email: 'danezidane@gmail.com',
   nilai: {
      tugas: 88,
      uts: 80,
      uas: 89
   }
};

function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}){
   return `halo nama saya ${nama} saya berumur ${umur} tahun nilai uas saya tahun ini ${uas}`;
};

console.log(cetakMhs(mhs));


