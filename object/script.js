// cara untuk membuat Object pada javascript 
// 1. Objek Literal 
// let mahasiswa = {
//    nama: 'zidane abbas mallaniung',
//    energy: 10,
//    makan: function(porsi){
//       this.energy += porsi*2;
//       console.log(`${this.nama} anda sudah mengisi energi, energi anda sekarang : ${this.energy}`);
//    }
// }

// kekurangan
// jika menggunakan object literal , jika ingin menambah objek baru maka harus dilakukan penambahan variabel untk objek, dan nama variabelnya tidak boleh sama .

// 2. function declaration 
// function Mahasiswa(nama, energi) {
//    let mahasiswa = {};

//    mahasiswa.nama = nama ;
//    mahasiswa.energi = 10;

//    mahasiswa.makan = function(porsi){
//       this.energi += porsi * 2 ;
//       console.log(`${this.nama} anda sudah makan, energi anda sekarang ${this.energi}`);
//    }

//    return mahasiswa;
// }

// let zidane = Mahasiswa('zidane', 10);

// 3. Constructor Function 
function Mahasiswa(nama, energi) {

  this.nama = nama ;
  this.energi = 10;

  this.makan = function(porsi){
      this.energi += porsi * 2 ;
      console.log(`${this.nama} anda sudah makan, energi anda sekarang ${this.energi}`);
   }

}

let zidane = new  Mahasiswa('zidane', 10);

// constructor fucntion dan function declaration memiliki sintak yang lumayan sama, hanya ada perbedaan pada contructor function tidak perlu menulis variabel yang menyimpan obejct di dalamnya dan tidak perlu direturn . kemudian pada property dan fungsi di dalamnya harus menggunakan this dan pada inisialisasinya harus menggunakan new. 


// prototype 
// function orang(nama, energi){
//    this.nama = nama;
//    this.energi = energi;

//    orang.prototype.makan = function(porsi){
//       this.energi += porsi * 5;
//       return `sisa energi : ${this.energi}`;
//    }

//    orang.prototype.kerja = (jam) => {
//       this.energi -= jam * 7;
//       return `sisa energi : ${this.energi}`;
//    }

//    orang.prototype.tidur = (jam) => {
//       this.energi += jam*8 ;
//       return `sisa energi : ${this.energi}`;
//    }
// }

// zidane = new orang('zidane', 50);


// versi kelas 
// class Orang {
//    constructor(nama, energi){
//       this.nama = nama ;
//       this.energi = energi ;
//    }

//       makan(porsi){
//          this.energi += porsi * 5;
//          return `sisa energi : ${this.energi}`;
//       }

//       kerja(jam) {
//          this.energi -= jam * 7;
//          return `sisa energi : ${this.energi}`;
//       }

//       tidur(jam){
//          this.energi += jam*8 ;
//          return `sisa energi : ${this.energi}`;
//       }
// }

// zidane = new Orang('zidane', 50);
