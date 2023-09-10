//for..of 
// digunakan untuk mengulang atau menulusuri objek objek yang iterable
// objek iterebel yaitu : 
//1.String 2.Array 3.Arguments/NodeList 4.TypedArray 5.Map 6.Set 7.user-defined iterables

// const mhs = ['zidane abbas','mallaniung', 'niken'];

// cara biasa
// for(let i = 0 ; i < mhs.length ; i++){
//    console.log(mhs[i])
// }

// menggunakan foreach
// mhs.forEach(m => console.log(m))

// menggunakan forof
// for(const m of mhs) {
//    console.log(m)
// }


// const mhs = ['zidane abbas','mallaniung', 'niken'];
// mhs.forEach((m, i) => {
//    console.log(`nama ${m}, mahasiswa ke - ${i}`) 
// });

// for(const [i,m] of mhs.entries()){
//    console.log(`nama ${m} mahasiswa ke - ${i}`)
// }


// Node List
// const liNama = document.querySelectorAll('.nama');
// for(const n of liNama){
//    console.log(n.innerHTML)
// }

// Arguments 
// function jumlahkanAngka(){
//    let jumlah = 0;
//    for(a of arguments){
//       jumlah += a;
//    }
//    return jumlah;
// }


// console.log(jumlahkanAngka(1,2,3,4,5));


// for in untuk object
let mhs = {
   nama: 'zidane abbas',
   nim: '216151024',
   email: 'danezidane@gmail.com'
}

for(const n in mhs){
   console.log(mhs[n])
}

