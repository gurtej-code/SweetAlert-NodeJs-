const mongoose=require('mongoose')
const Register=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now    
    }
})

const SweetAlertUsers=mongoose.model('SweetAlertUSers',Register)
module.exports=SweetAlertUsers