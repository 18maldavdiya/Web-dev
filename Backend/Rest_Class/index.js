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
        id : "1a",
        username : "hanish",
        content : "I love coding"
    },
     {
        id : "2b",
        username : "Manish",
        content : "i am a hard worker"
    },
     {
        id : "3c",
        username : "mohit",
        content : "he is good lisning"
    },
]

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/post/new",(req,res)=>{
    res.render("new.ejs",{posts});
})
app.post("/posts",(req,res) =>{
    let {username , content} = req.body;
    posts.push({username , content});
    res.redirect("/post");
})
app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    console.log(post);
    // res.render("show.ejs",{post});
})
app.listen(port, () =>{
    console.log(`server is listening at ${port}`);
});