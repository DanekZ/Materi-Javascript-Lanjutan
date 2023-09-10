// menggunaka promise
// function cobaPromise(){
//  return  new Promise((resolve, rejected) => {
//       const waktu = 2000;
   
//       if(waktu < 3000){
//          setTimeout(() => {
//             resolve('selesai')
//          }, waktu);
//       } else {
//          rejected('kelamaan')
//       }
     
//    })
   
// }

// const coba = cobaPromise();
// coba.then(r => console.log(r))
// .catch(r => console.log(r))



// menggunkaan asyns function 
function cobaPromise(waktu){

    return new Promise((resolve, rejected)=> {
      if(waktu < 3000){
         setTimeout(() => {
            resolve('selesai')
         }, waktu);
      } else {
         setTimeout(()=> {
            rejected('kelamaan')
         },waktu)
      }
      
   })
};

async function cobaAsync(waktu){

   try {
      const coba = await cobaPromise(waktu);
      console.log(coba)
   } catch (error) {
      console.log(error)
   }
   
   // return coba;
}

const coba = cobaAsync(3000);