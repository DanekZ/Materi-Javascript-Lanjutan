// const angka = [-1, 8 , -3 , 4, 8, -2,-4 , 6 , 4 ]

// const newAngka = [];

// for(let i = 0 ; i < angka.length ; i++ ){
//     if(angka[i] >= 3){
//       newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka)

// menggunakan cara higher order function yaitu filter, map, reduce
// const angkaBaru = angka.filter(a => a >= 3)

// console.log(angkaBaru)

// penggunaan cara reduce
// const angka = [-1, 8 , -3 , 4, 8, -2,-4 , 6 , 4 ]

// const newAngka = angka.reduce((accumulator, currentValue)=> accumulator+currentValue)
// console.log(newAngka)


// penggunaan method chining (penggunaan filter,map,reduce)
const angka = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

const newAngka = angka.filter(a => a > 2) //3 4 5 6 7 8 9 10
   .map(a => a * 2) //6 8 10 12 14 16 18 20
   .reduce((acc,cur) => acc + cur, 0); //

console.log(newAngka)