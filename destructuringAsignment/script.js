// Destructuring Variabel / assignment

// destructuring array 
const perkenalan = ['halo', 'nama','saya', 'zidane'];

// const [halo,nama,saya,zidane] = perkenalan;

// console.log(halo)

// skipping item 
// const [halo, , ,zidane] = perkenalan;
// console.log(zidane)

// swap items
// let a = 1;
// let b = 2; 

// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// return value pada function 
// function coba() {
//    return [1,2]
// }

// const [a,b] = coba(); 
// console.log(a)

// Rest Parameter    
// const angka  = [1,2,3,4,5,6,7,8]
// const [a, ...values] = angka;

// console.log(values[7])


// destructuring object 
// const mhs = {
//    nama: 'zidane abbas',
//    umur: 21
// };

// const {nama, umur} = mhs;
// console.log(nama)
// nama variabel harus sesuai dengan property object .


// assignment tanpa declarasi object
// ({nama, umur} = {
//    nama: 'zidane abbas',
//    umur: 21
// }); 

// console.log(nama)
// syaratnya assignment nya harus dibungkus dengan () dari variabel sampai nilai objeknya


// assign ke variabel baru 
// const mhs = {
//    nama: 'zidane abbas',
//    umur: 21
// };

// const {nama: a, umur:b} = mhs;
// console.log(a)

// memberikan default value pada object
// const mhs = {
//    nama: 'zidane abbas',
//    umur: 21,
// };

// const {nama, umur, email = "default@gmail.com"} = mhs;
// console.log(email)

// memberikan asign nilai terhadap default value pada object
// const mhs = {
//    nama: 'zidane abbas',
//    umur: 21,
//    email: 'danezidane93@gmail.com'
// };

// const {nama, umur, email = "default@gmail.com"} = mhs;
// console.log(email)


// rest parameter
// const mhs = {
//    nama: 'zidane abbas',
//    umur: 21,
//    email: 'danezidane93@gmail.com'
// };

// const {nama, ...values } = mhs;
// console.log(values.email)


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
   nama: 'zidane abbas',
   umur: 21,
   email: 'danezidane93@gmail.com'
};

function getIdMhs ({nama}) {
   return nama;
}

console.log(getIdMhs(mhs))
