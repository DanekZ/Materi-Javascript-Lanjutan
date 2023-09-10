class Person {
   constructor(nama, usia){
      this.nama = nama;
      this.usia = usia;
   }

   tampil(){
      return `nama : ${this.nama} dan usia : ${this.usia}`
   }
}

console.log(new Person('zidane', 20))