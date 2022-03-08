const addUser = document.querySelector("#addUser")   
const tableBody = document.querySelector("#tableBody")
const cusHeads = ['name', 'accnum', 'intialbalance','address']
const readDataFromStorage= (storageKey)=>{
    let data
    try{
        data = JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
        data= []
    }
    return data
}
const writeDataToStorage = (data, storageKey)=>{
    localStorage.setItem(storageKey, JSON.stringify(data))
}
let check = []
let accacu
const formSubmit = function(e){
    e.preventDefault()
    culc: while (true) {
        accacu = Math.floor(Math.random() * 10);
        if (check[accacu] == true) {
            continue culc
        } 
        break
    }
    let task = {id:Date.now(), createdAt: new Date()} 
    cusHeads.forEach(head => task[head]= this.elements[head].value )
    const tasks = readDataFromStorage("tasks")
    tasks.push(task)
    console.log(task)
    writeDataToStorage(tasks, "tasks")
    this.reset()
    window.location.href="index.html"
}

const creatMyOwnElements = (parent, htmlElement, txt, classes)=>{
    const myEle = document.createElement(htmlElement)
    parent.appendChild(myEle)
    if(txt) myEle.textContent = txt
    if(classes) myEle.className = classes
    return myEle
}
const delCust = (tasks, i) =>{
    tasks.splice(i, 1)
    writeDataToStorage(tasks,"tasks")
    showAll()
}
const showSingle = (task, i, tasks)=>{
    const tr = creatMyOwnElements(tableBody,"tr",null, null)
    creatMyOwnElements(tr,"td",i+1, null)
    cusHeads.forEach(head=>creatMyOwnElements(tr,"td",task[head], null))
    const actionTD = creatMyOwnElements(tr,"td",null, null)
    const showBtn =creatMyOwnElements(actionTD, "button", "show", "btn btn-primary me-2")
    const editBtn = creatMyOwnElements(actionTD, "button", "Edit", "btn btn-warning me-2")
    const delBtn = creatMyOwnElements(actionTD, "button", "Delete", "btn btn-danger me-2")
    delBtn.addEventListener("click", ()=>{ delCust(tasks, i) })
}
showAll = () =>{
    tableBody.innerHTML=""
    const tasks = readDataFromStorage("tasks")
    tasks.forEach((task, index)=> showSingle(task, index, tasks))
}
if(addUser) {addUser.addEventListener("submit", formSubmit)}

if(tableBody) showAll()