function Animal(nama, jenis){
   this.nama = nama;
   this.jenis = jenis;

   this.hasil = function(nama){
      return `${this.nama} adalah hewan berjenis ${this.jenis}`;
   }

}


function Kucing(nama, jenis){
   Animal.call(this, nama, jenis);
}

function Anjing(nama, jenis){
   Animal.call(this,nama,jenis);
}

Kucing.prototype = Object.create(Animal);
Kucing.prototype.constructor = Kucing;


Anjing.prototype = Object.create(Animal);
Anjing.prototype.constructor = Anjing;

let asep = new Kucing('kucing','mamalia');
console.log(asep.hasil());