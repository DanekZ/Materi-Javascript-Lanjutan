$('.input-keyword').on('keyup',function(){

   $.ajax({
      url: "http://www.omdbapi.com/?apikey=9691fc29&s="+$('.input-keyword').val(),
      success: results => {
         const movies = results.Search;
         console.log(movies[0])
         let cards = "";
         movies.forEach(m => {
            cards += showCards(m)
         });
   
         $('#movies').html(cards)
   
         // ketika tombol detail di click
         $('.modalDetailButton').on('click', function(){
            $.ajax({
               url: "//www.omdbapi.com/?apikey=9691fc29&i="+$(this).data('imdbid'),
               success: m => {
                  const movieDetails = showCardDetail(m);
   
               $('.modal-body').html(movieDetails)
               },
               error: (e) => console.log(e.responseText)
            })
         })
         
   
      },
   
      error: e => console.log(e)
   });

});


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
