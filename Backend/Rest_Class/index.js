const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
aapp.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.send("serving working well");
})
app.listen(port, () =>{
    console.log(`server is listening at ${port}`);
});