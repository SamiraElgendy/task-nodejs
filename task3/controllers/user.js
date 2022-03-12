const validator = require("validator")
const chalk = require("chalk")
const dealWithJson = require("./dealWithJson")
const findMycustomerIndex = (customer, key, val)=>{
    let i = customer.findIndex( customer => customer[key] == val )
    return i
}
const addcustomer = (customerData) =>{
    try{
        if(customerData.name.length<3) throw new Error("invalid name")
        users.push(customerData)
        dealWithJson.writeData(customers)
        console.log(chalk.green("customer Added"))    
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
const addOP=(type ,value,accNum)=>{
    const customers = dealWithJson.readData()
    const customer=customers.find(u=>u.accNum==accNum)
        console.log(customer)
        if(type=="withdraw"){
           if(customer.intialBalance<value){
               console.log("dont enough money")
           }else{
               customer.intialBalance -=value
           }
        }else if (type=="add"){
            customer.intialBalance=customer.intialBalance+=value
            console.log("find money")
        }

    }

const showAll = () => {
    try{
        const customers = dealWithJson.readData()
        if(customers.length==0) throw new Error("no customers yet")
        else{
            customers.forEach(customer=>{
                console.log(chalk.green(`
id: ${customer.id} - name: ${customer.name} - accNum: ${customer.accNum} - intialBalance: ${customer.intialBalance}- remainigBalance: ${customer.remainigBalance} 
`))
            })
        }
    }
    catch(e){
        console.log(chalk.red(e.message))
    }
}
const showSingle = (customerId) => {
    const customers = dealWithJson.readData()
    const customer = findMycustomerIndex(customers, "id", customerId)  
    if(user!=-1) console.log(customers[customer])
    else console.log('not found')
}
const delcustomer = (customerId) => {
    let customers = dealWithJson.readData()
    let filtered = customers.filter(u=> u.id != customerId)
    if(users.length == filtered.length) return console.log("not found")
    dealWithJson.writeData(filtered)
}
const editcustomer = (customerId, newData) => {
    const customers = dealWithJson.readData()
    const i = customers.findIndex(u=> u.id==customerId)
    if(i==-1) return console.log("not found")
    users[i] = {id:customerId, ...newData}
    dealWithJson.writeData(customers)
    console.log("data edited")
}
module.exports = { addcustomer, showAll, showSingle, delcustomer, editcustomer }
module.exports={addcustomer ,addOP}