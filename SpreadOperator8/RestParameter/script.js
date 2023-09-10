//rest parameter yaitu nilai yang dikirim ke suatu parameter function sisa dari pengambilan nilai nya disebut rest parameter

// penggunaan umum
// function jumlahkan(...angka){
//    return [...angka].reduce((a,b) => a + b)
// }

// console.log(jumlahkan(1,2,3,4,5))


// penerapan rest parameter pada array destructuring 
// const mahasiswa = ['zidane', 'abbas', 'mallaniung', 'niken', 'aguilera'];

// const [ketua, wakil, ...anggota] = mahasiswa;
// console.log(ketua)

// penerapan rest parameter pada object destructuring 
// const team = {
//    pm: 'zidane',
//    frontend1 : 'abbas',
//    frontend2 : 'mallaniung',
//    backend: 'niken'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam.frontend1)

// filtering 
function filterBy(type, ...values){
   return values.filter(v => typeof v === type)
}

console.log(filterBy('string',1,2,'zidane',false,10, true, 'siapa aja '))