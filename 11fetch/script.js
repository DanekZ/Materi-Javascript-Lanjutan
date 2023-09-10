// menggunakan fetch 
// fitur pencarian film
// const searchButton = document.querySelector('.searchButton');

// searchButton.addEventListener('click', function(){

//    const keyword = document.querySelector('.input-keyword')
   
//    fetch("http://www.omdbapi.com/?apikey=9691fc29&s=" + keyword.value)
//       .then(r => r.json() )
//       .then(data =>{
//          const movies = data.Search;
//          let cards = ``;

//          movies.forEach(m => cards += showCards(m));
//          const moviesContainer = document.querySelector('#movies');
//          moviesContainer.innerHTML = cards

//          // fitur ketika show details di click
//          const detailButton = document.querySelectorAll('.modalDetailButton');
//          detailButton.forEach(button => {
//             button.addEventListener('click', function(){
//                const imbdid = this.dataset.imdbid

//                fetch("//www.omdbapi.com/?apikey=9691fc29&i=" + imbdid)
//                   .then(response => response.json())
//                   .then(response => {
//                      const cardDetail = showCardDetail(response);
//                      let detailModals = document.querySelector('.modal-body')
//                      detailModals.innerHTML = cardDetail;
//                   })

//             })
//          });
//       })

// }) 


// fetch refactoring => menggunakan cara yang lebih baik agar mudah dibaca
// ketika tombol cari di klick
// 
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', async  function(){
   const inputKeyword = document.querySelector('.input-keyword')

   // mengirim input keyword ke dalam fungsiGetmovies
   const movies = await getMovies(inputKeyword.value);
   // fungsi melakukan looping pada cards
   updateUI(movies);

});

// ketika tombol detail di klik
// menggunakan event binding karena tombol detail button itu belum ada saat pertama kali load
document.addEventListener('click', async function(e) {
   if(e.target.classList.contains('modalDetailButton')){
      const imdbid = e.target.dataset.imdbid;
      const movieDetailModal = await movieDetail(imdbid);
      updateUIDetail(movieDetailModal);
   }
})




// functions
// data detail modal
function movieDetail(imdbid){
   return fetch("//www.omdbapi.com/?apikey=9691fc29&i=" + imdbid)
   .then(response => response.json())
   .then(response => response)
}

function updateUIDetail(movie){
   const moveDetail = showCardDetail(movie);
   const modalBody = document.querySelector('.modal-body')
   modalBody.innerHTML = moveDetail;
}
// tutu data detail modal


// get data
function getMovies(keyword){
   return fetch("http://www.omdbapi.com/?apikey=9691fc29&s=" + keyword)
   .then(r => r.json())
   .then(data => data.Search)   
}

function updateUI(movies){
   let cards = ``;
   movies.forEach(movie => {
      cards += showCards(movie);
   });
   const moviesContainer = document.querySelector('#movies');
   moviesContainer.innerHTML = cards
}

// tutup get data


function showCards(m){
   return `<div class="col-md-4">
   <div class="card">
      <img src="${m.Poster}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modalDetailButton" data-bs-toggle="modal" data-bs-target="#detailMoviesModal" data-imdbid="${m.imdbID}">Show Details</a>
      </div>
    </div>
</div>`
}

function showCardDetail(m){
   return `
   <div class="container-fluid">
      <div class="row">
         <div class="col-md-3">
            <img src="${m.Poster}" alt="" class="img-fluid">
         </div>
         <div class="col-md">
            <ul class="list-group">
               <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
               <li class="list-group-item"><strong>Director : </strong>${m.Director} </li>
               <li class="list-group-item"><strong>Actors : </strong>${m.Actors} </li>
               <li class="list-group-item"><strong>Writers:</strong>${m.Writer} </li>
               <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
             </ul>
         </div>
      </div>
   </div>`
}
