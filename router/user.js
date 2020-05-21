const express=require('express')
const Router=express.Router()

Router.get('/register',(req,res)=>{
    res.render('register')
})

Router.get('/login',(req,res)=>{
    res.render('login')
})

Router.post('/register',(req,res)=>{
    const {email,password,password2}=req.body
    const errors=[]
    
    if(!email || !password || !password2){
        errors.push({msg:'Please Fill Out All Fields'})
    }
    
    if(password!=password2){
        errors.push({msg:'Password did not match'})
    }

    if(password.length<6){
        errors.push({msg:'Password length shoudle be atlest 6'})
    }

    if(errors.length>0){
        res.render('register',{
            errors,
            email,
            password,
            password2
        })
    }else{
        console.log("its working fine")
    }
})

module.exports=Router