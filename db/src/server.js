const express = require('express')
const mongoose = require("mongoose")



const connect = () =>{
    return mongoose.connect("mongodb+srv://hramdas:Ramdas1998@cluster0.or8t9.mongodb.net/HealthKart?retryWrites=true&w=majority")
}


const app = express()
 app.use(express.json())



app.listen(2200, async function(){
    await connect()
    console.log('listening on 2200')
})