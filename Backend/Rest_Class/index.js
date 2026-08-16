const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "hanish",
        content : "I love coding"
    },
     {
        username : "Manish",
        content : "I love coding"
    },
     {
        username : "mohit",
        content : "I love coding"
    },
]

app.get("/post",(req,res)=>{
    res.send("serving working well");
})
app.listen(port, () =>{
    console.log(`server is listening at ${port}`);
});