function apiGetter(apiLink, callback){
    fetch(apiLink)
   .then( (x) => {
       x.json()
        .then( (y) => {
           y.articles.forEach(element => {document.querySelector(".card").innerHTML+ `<div class ='col-md-3 my-2'><img src="${element.urlToImage}" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">${element.content}</p></div>`
         
      } )
       .catch(err=>{
          callback(false, err.message)
       })
    }
   )
    .catch(e=> callback(false, e.message))    
}
   )
apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed",(res)=>{
    console.log(res)
})

}

// ////async function apiGetter(apiLink, callback) {
  //  try {
    //    let data = await fetch(apiLink)
   //     let jsonData = await data.json()
    //    callback(jsonData)
   // }
   // catch (e) {
     //   callback(e.message)
   // }
//}

//apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed", (res)=>{
  //  console.log(res)
//})
