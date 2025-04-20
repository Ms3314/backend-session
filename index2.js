const express = require('express');
const User = require('./schema');
const app = express();
const PORT = 3000 ;

app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backendSession');


app.post("/user", async (req , res)=>{
    console.log(req.body);
    const {name , email , phoneNumber } = req.body ; 
    const userreturnee = await User.create({
        name  ,
        email ,
        phoneNumber  
    })
    res.json({
        message : "this is the user you created",
        userreturnee 
    })
})

app.get("/user" , async (req , res) => {
    const user = await User.findById({_id : "6804c106e9720efc71910abc"})
    res.json({
        users : user
    })
})

app.patch("/user" , async (req , res) => {
    const user = await User.findByIdAndUpdate({_id : "6804c106e9720efc71910abc"} , { name : req.body.name})
    res.json({
        users : user
    })
})

app.delete("/user/:id" , async (req , res) => {
    // const userid = req.params.id ;
    const {id} = req.params; 
    const user = await User.findByIdAndDelete({_id : id })
    res.json({
        message : "the user has been deleted" ,
        delete_user : user
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});