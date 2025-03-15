const express = require("express")
const app = express()
const cors = require("cors")
const fs = require("fs")
//const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

// mongoose.connect("mongodb://localhost:27017/apsdb")
// .then(()=>{console.log("mongo connected");})
// .catch(()=>{console.log("something wrong in db");})

//schema , model, save(insert)

// const userScehma = new mongoose.Schema({
//     username:{
//         type:String
//     }
// })

// const User = mongoose.model("user",userScehma)


 app.post('/login',(req,res)=>{
    // const username = req.body.username;
    // const userDetails = new User({
    //     username:username
    // })
    // userDetails.save()
    // .then(()=>{res.send("success")})
    // .catch(()=>{res.send("didnt save")})
    const username = req.body.username; 
    console.log(username)
    res.send("success")


 });

 app.listen(3001,()=>{
    console.log("server started!!");
 });