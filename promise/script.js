// materi promize
// contoh pertama 
// let ditepati = false;
// const janji1 = new Promise((diterima, ditolak) => {
//    if(ditepati){
//       diterima('janji telah ditepati');
//    } else {
//       ditolak('ingkar janji')
//    }
// });

// janji1
// .then((response) => console.log(`Diterima : ${response}`))
// .catch((jawaban) => console.log(`Ditolak : ${jawaban}`))


// contoh kedua 
// let ditepati = false;
// const janji2 = new Promise((respon, ditolak) => {
//    if(ditepati){
//       setTimeout(() => {
//          respon('janji ditepat');
//       }, 2000);
//    } else {
//       setTimeout(() => {
//          ditolak('janji ingkar')
//       }, 2000);
//    }
// })

// console.log('mulai')
// //  console.log(janji2.then((diterima) => console.log(diterima)))
// janji2
// .finally(() => console.log('selesai menunggu'))
// .then((response) => console.log(response))
// .catch((response) => console.log(response))

// console.log('selesai')


// di dalam promise ada method yang namanya all() 
// promise.all()

const film = new Promise( resolve => {
   setTimeout(() => {
      resolve([{
         judul: 'Tukang Bubur Naik Haji',
         sutradara: 'komeng',
         pemeran: 'kimong'
      }])
   }, 2000);
});

const cuaca = new Promise( resolve => {
   setTimeout(() => {
      resolve([{
         kota: 'bontang',
         temp: 28,
         keterangan: 'terik'
      }])
   }, 1000);
})

const hasil = [];
Promise.all([film,cuaca])
   .then(Response => {
      const [film, cuaca] = Response;
      console.log(film);
      console.log(cuaca)
   })

