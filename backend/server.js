const express=require('express')
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const router = require('./Router/campRouter')
var cors = require('cors')
const srouter = require('./Router/adminroutes')


dotenv.config();
const app=express()
app.use(express.json())
app.use(cors())

app.use('/api',router)
app.use('/api2',srouter)

const connectDb=async()=>{
    try{
 const data= await mongoose.connect('mongodb+srv://maheshwarisilvi98:silvi123@cluster0.jftpm.mongodb.net/books?retryWrites=true&w=majority')
 console.log('conneted to database')
    } catch(err){
        console.log(err)
    }
}
app.listen(3000,()=>{
    connectDb()
    console.log('server is connected')
})