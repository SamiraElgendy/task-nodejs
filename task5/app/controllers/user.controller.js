const db = require("../../models/dbConnection")
const  ObjectId = require("mongodb").ObjectId
const showAll = (req,res)=>{
    db((err,connection)=>{
        connection.collection("customer").find()
        .toArray((e,customers)=>{
            if(e) res.send(e) 
            res.render("showAll",{
                pageTitle:"All Customers",customers,
                isEmpty:customers.length==0? true:false
            })
        })
    })
}
const show=(req,res)=>{
    let customerId=req.params.id
    db((err, connection)=>{
        connection.collection("customer").findOne( { _id : new ObjectId(customerId) } , 
            (e, result)=>{
    res.render("show",{
        pageTitle:"UserData",
        customer:result,
        isEmpty: result? false : true
    })
      })
      })
}
const addCustomer = (req,res)=>{
    res.render("add", {
        pageTitle:"Add New Customer"
    })
}
const addLogic = (req,res)=>{
    db((err, connection)=>{
        connection.collection("customer").insertOne( req.body,
            (e,result)=>{
                if(e) res.send(e)
                res.redirect("/")
            }
        )
    })
}
const addop=(req,res)=>{
    const accNum=req.params.accNum
    db((err, connection)=>{
        connection.collection("customer").findOne( { _accum : new ObjectId(accNum) } , 
        (e, result)=>{ if(req.body.addop){
            if(req.body.optype=="withdraw"){
                if(Number(allCustomers[index].remainigBalance)< req.query.opvalue){
                    alert("no enough money")
                }else allCustomers[index].remainigBalance=Number(allCustomers[index].remainigBalance)-Number(req.body.opvalue)
           } } else if(req.body.optype=="add"){
                allCustomers[index].remainigBalance= Number(allCustomers[index].remainigBalance)+Number(req.body.opvalue)
            }  
        res.render("addop", {
            pageTitle:"Add New Operation",result
        })
        })
    })
}
module.exports = { showAll, addCustomer,show,addLogic,addop}
