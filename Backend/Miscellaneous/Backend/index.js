const express = require("express");
const app =  express()
port = 8080;

app.get("/register" ,(req,res)=>{
    let {user , password} = req.query;
    res.send(`student get responce welcomr ${user}`);
})
app.post("/register" ,(req,res)=>{
    res.send("student POST responce");
})
app.listen(port, () =>{
    console.log(`lisning to the ${port}`);
})

