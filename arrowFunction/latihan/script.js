const mahasiswa = [100, 80, 75, 60, 100];

const proses = (nilai, eksekusi) => eksekusi(nilai);

// const hitungRataRata = nilai => nilai.reduce((total, nilai) => total + nilai / nilai.length)
function hitungRataRata(nilai){
   return nilai.reduce((hasil, angka) => (hasil + angka) / nilai.length)
}

function jumlahNilai(nilai){
   return nilai.reduce((hasil, angka) => hasil+angka);
}


console.log(proses(mahasiswa,jumlahNilai));