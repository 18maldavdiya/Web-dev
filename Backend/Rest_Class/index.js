const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4 : uuidv4 }  = require("uuid");


app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "hanish",
        content : "I love coding"
    },
     {
        id : uuidv4(),
        username : "Manish",
        content : "i am a hard worker"
    },
     {
        id : uuidv4(),
        username : "hanish",
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
    let id = uuidv4();
    posts.push({id, username , content});
    res.redirect("/post");
})
app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id ===p.id);
    res.render("Show.ejs",{post});
})

app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let newCountent = req.body.content;
    let post = posts.find((p) => id ===p.id);
    post.content = newCountent;
    res.send("updated");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => p.id == id);

    res.render("Edit.ejs", { post });
});
app.listen(port, () =>{
    console.log(`server is listening at ${port}`);
});