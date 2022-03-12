const customer = require("./controllers/user")
const yargs = require("yargs")
yargs.command({
    command:"addcustomer",
    describe:"used for adding customer",
    builder:{
        name:{
            type:String,
            required:true
        },
        accNum:{
            type:Number,
        },
        intialBalance:{
            type:Number,
        },
        remainigBalance:{
            type:Number,
        }
    },
    handler:function(argv){
        let customerData = {
            name:argv.name,
            accNum:argv.accNum,
            ntialBalance:argv.ntialBalance,
            remainigBalance:argv.remainigBalance,
            id:Date.now()
        }
        customer.addcustomer(customerData)
    }
})
yargs.command({
    command:"showAll",
    describe:"used for show all customer",
    handler:function(){
        customer.showAll()
    }
})
yargs.command({
    command:"showCustomer",
    describe:"used for show single customer",
    builder:{},
    handler:function(argv){

    }
})
yargs.command({
    command:"dealWithcustomer",
    describe:"used for add or withdraw customer",
    builder:{
        op:{
            type: String,
            required:true
        },
        customerId:{
            required:true,
            type:String
        }
    },
    handler:function(argv){
        if(argv.op!="withdraw"&& argv.op!="add") return console.log("invalid operation")
        if(argv.op=="withdraw"&&argv.remainigBalance>=opvalue) return console.log("invalid operation")
        else return customer.addOP(argv.customerId,argv.intialBalance ,argv.addOP)
    }
})
yargs.command({
    command:"editcustomer",
    describe:"used for edit customer",
    builder:{
        customerId:{},
        newName:{},
        newaccNum:{},
        newintialBalance:{},
        newremainigBalance:{}
    },
    handler:function(argv){

    }
})
yargs.argv