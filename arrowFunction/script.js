// let tampilPesan = nama =>`halo ${nama}`

// console.log(tampilPesan('zidane'))

// let mahasiswa = ['zidane', 'niken', 'abbas', 'aguilera'];

// let daftarMahasiswa = mahasiswa.map(nama => ({
//    nama: nama,
//    panjangHuruf : nama.length
// }));

// console.table(daftarMahasiswa)


// konsep this pada arrow function 
// const Mahasiswa = function (){
//    this.nama= 'zidane',
//    this.umur= 23

//    this.hello = function(){
//       return `halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`;
//    }
// }

// const zidane = new Mahasiswa();
// let halo = 'hai';
const Mahasiswa = function (){
   this.nama= 'zidane',
   this.umur= 23

   this.hello = function(){
      return `halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`;
   };

   (() => console.log(this.nama))()
}

const zidane = new Mahasiswa();


// const box = document.querySelector('.box');

// box.addEventListener('click', function(){
//    let satu = 'size';
//    let dua = 'caption';

//    if(this.classList.contains(dua)){
//       [satu,dua] = [dua,satu]
//    }

//    this.classList.toggle(satu);
   
//    // setTimeout(() => {
//    //    this.classList.toggle(dua);
//    // },600)
//    setTimeout(() => {
//       this.classList.toggle(dua);
//    },600)
// });

