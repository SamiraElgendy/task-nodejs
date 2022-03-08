function apiGetter(apiLink){
    fetch(apiLink)
    .then( (x) => {
        x.json()
        .then( (y) => {
           y.arts.forEach(element => {
               document.querySelector(".row").innerHTML+=`<div   class ='col-md-3 my-2'><div class="card p-3"><h4 class="card-title">${element.source.name}</h4><img src="${element.urlToImage}" class="card-img-top"><div class="card-body">
               <p class="card-text">${element.content}</p> <a href="#" class="card-link">${element.url}</a>
             </div></div></div>`
           });
        } )
        .catch((err) => {
            console.log(err);
        })
    }   
    apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed")