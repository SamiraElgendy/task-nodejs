async function apiGetter(apiLink, callback) {
    try {
       let data = await fetch(apiLink)
        let jsonData = await data.json()
       callback(jsonData)
      }
    catch (e) {
        callback(e.message)
    }}

apiGetter("https://newsapi.org/v2/top-headlines?country=eg&apiKey=a891eee7e84c41b0a31729bdeb1b03ed", (res)=>{
   console.log(res)
})

const wrapper = document.querySelector('#wrapper')
const divWrapper = createMyOwnElement(wrapper, 'div', "row", null)
articles.forEach((element =>{document.querySelector(".card").innerHTML+
`<img src="${element.urlToImage}" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">${element.content}</p></div>`
})
)
