//function apiGetter(apiLink, callback){
 //   fetch(apiLink)
  //  .then( (x) => {
  //      x.json()
  //      .then( (y) => {
   //         y.articles.forEach(element => {
   //             document.querySelector(".row").innerHTML+<div   //class ='col-md-3 my-2'><div class="card p-3"><h4 class="card-title">${element.source.name}</h4><img src="${element.urlToImage}" class="card-img-top"><div class="card-body">
      //          <p class="card-text">${element.content}</p> <a href="#" class="card-link">${element.url}</a>
      //        </div></div></div>})
     //   } )
     //   .catch(err=>{
    //        callback(false, err.message)
    //    })
   // }
  //  )
   // .catch(e=> callback(false, e.message))    
//}

//apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed", (res, err)=>{
//if(err) console.log(err)  
//else {
//res.forEach(element => {
//        console.log(element.id)
 //   });
//}
//})
const apiGetter = async (apiLink, callback) => {
    try{
        let data = await fetch(apiLink)
        let jsonData = await data.json()
        callback(jsonData)    
    }
    catch(e){
        callback(e.message)
    }
}

apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed", (res)=>{
    console.log(res)
})


