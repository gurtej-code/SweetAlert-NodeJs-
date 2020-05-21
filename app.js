const express=require('express')
const expresslayout=require('express-ejs-layouts')
const mongoose=require('mongoose')
const app=express()

app.use(express.urlencoded({extended:false}))

//Connecting Database
//const db=require('./config/key').MongoURI
//mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
//.then(()=>{console.log('Database is connected...')})
//.catch(err=>{console.log(err)})

//Connecting Static Files
app.use('/icons',express.static('icons'))
app.use('/Style',express.static('Style'))

//EJS
app.use(expresslayout)
app.set('view engine','ejs')

app.use('/',require('./router/index'))
app.use('/user',require('./router/user'))

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server Started On ${PORT}`))

