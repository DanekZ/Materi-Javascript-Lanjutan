// Spread Operator => memecah iterables menjadi single element
// const mhs = ['zidane','abbas','mallaniung'];

//  salah satu fungsi spread operator yaitu menggabungkan 2 array;
// const mhs = ['zidane', 'abbas', 'mallaniung'];
// const dosen = ['zain', 'rihart', 'mulyanto'];

// const orang = [...mhs, ...dosen];
// console.log(orang);


// salah satu fungsi spread operator yaitu meng-copy array;
// const mhs = ['zidane', 'abbas', 'mallaniung'];
// const mhs1 = [...mhs];

// mhs1[0] = 'danek';
// console.log(mhs)

// contoh pada penerapan di html
// const list = document.querySelectorAll('li');
// cara manual
// let mhs = [];
// for(let i = 0 ; i < list.length ; i++){
//    mhs.push(list[i].textContent)
// }
// console.log(mhs)
// cara praktis
// const mhs = [...list].map(m => m.textContent);
// console.log(mhs)

//studi kasus lain penggunaan html css dan javasript
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
// nama.innerHTML = huruf;

