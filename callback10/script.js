// callback
// synchronous callback
// function halo(nama){
//    alert(`halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//    const nama = prompt('masukkan nama : ');
//    callback(nama);
// }

// tampilkanPesan(halo);
// atau dengan cara lain tanpa membuat fungsi halo

// function tampilkanPesan(callback){
//    const nama = prompt('masukkan nama : ');
//    callback(nama)
// }

// tampilkanPesan(nama => alert(`halo, ${nama}`));


// 
// const mhs = [
//    {
//       nama: 'zidane',
//       nim: '216151924',
//       email: 'zidane@gmail.com',
//       jurusan: 'taknik informatika',
//       dosenWaliId: 1
//    },
//    {
//       nama: 'abbas',
//       nim: '21615990',
//       email: 'abbas@gmail.com',
//       jurusan: 'taknik multimedia',
//       dosenWaliId: 2
//    },
//    {
//       nama: 'mallaniung',
//       nim: '21615111',
//       email: 'mallaniung@gmail.com',
//       jurusan: 'taknik multimedia',
//       dosenWaliId: 1
//    },

// ]

// mhs.forEach(m => console.log(m.nama))


// implementasi callback dengan AJAX
// simpan di htdocs
// siapkan file json untuk menyimpan file 

function getDataMahasiswa(url,success, error){
   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function(){
      if(xhr.readyState === 4) {
         if(xhr.status === 200){
            success(xhr.response);
         } else if (xhr.status === 400){
            error();
         }
      }
   }

   xhr.open('get', url);
   xhr.send()
}

getDataMahasiswa('data/mahasiswa.json',(response)=> console.log(response))