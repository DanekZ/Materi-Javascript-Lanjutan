// let mahasiswa = [
//    {
//       nama: 'zidane abbas',
//       umur: 21,
//       nim: '216151024',
//       email: 'danezidane@gmail.com'
//    },
//    {
//       nama: 'niken aguilera',
//       umur: 20,
//       nim: '216151005',
//       email: 'niken@gmail.com'
//    },
//    {
//       nama: 'enzet',
//       umur: 22,
//       nim: '216151006',
//    },

// ]

// const el = `<div class="mhs">
//    ${mahasiswa.map(m => `<ul>
//       <li>${m.nama}</li>
//       <li>${m.umur}</li>
//       <li>${m.email ? m.email : 'tidak ada email'}</li>
//    </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;


// Nested (HTML fragment bersarang)
const mahasiswa = {
   nama: 'zidane abbas mallaniung',
   nim : '216151024',
   mataKuliah: [
      'pemograman dasar', 
      'web design',
      'web programming',
      'laravel'
   ]
}

function cetakMataKuliah(mataKuliah){
   return `
      <ol>
      ${mataKuliah.map(mk => `
      <li>${mk}</li>
      `).join('')}
      </ol>
   `
}

let hasil = `
   <div class="mhs">
   <h1>${mahasiswa.nama}</h1>
   <p>nim: ${mahasiswa.nim}</p>
   <p>Mata Kuliah: </p>
   ${cetakMataKuliah(mahasiswa.mataKuliah)}
   </div>
`;

document.body.innerHTML = hasil;