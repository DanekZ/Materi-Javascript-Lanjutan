// ambil semua elemen video
const elementUL = document.querySelector('ul');
const elementLi = Array.from(elementUL.querySelectorAll('li')) ;
// pilih hanya yang 'JAVASCRIPT LANJUTAN
let jsLanjut = elementLi.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi masing masing video
.map(duration => duration.getAttribute('data-duration'))
// ubah durasi menjadi int , ubah menit menjadi detik 
.map(waktu => {
   const hasil = waktu.split(':').map(toFloat => parseFloat(toFloat));
   return hasil[0] * 60 + hasil[1]
})
// jumlah kan semua detik
.reduce((total, detik) => total + detik )

// ubah formatnya jadi jam menit detik 
const jam = Math.floor(jsLanjut/3600);
jsLanjut -= jam*3600;
const menit = Math.floor(jsLanjut / 60);
jsLanjut -= menit*60;
const detik = jsLanjut;

// simpan di dom 
const pDurasi = document.querySelector('.total-durasi');
const pJmlVideo = document.querySelector('.jumlah-video');
const jmlVideo = elementLi.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik}`;
pJmlVideo.textContent = `${jmlVideo}`
