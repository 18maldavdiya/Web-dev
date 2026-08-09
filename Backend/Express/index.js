const express = require('express');
const app = express();
let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// app.use((req ,res) =>{
//     console.log('Request response');
//     res.send({
//       name : "apple",
//       price : 100,
//       colour : "red"
//     });
// })

// app.get( '/' ,(req,res) =>{
//   res.send("you are my frend");
// })
// app.get( '/apple' ,(req,res) =>{
//   res.send("you call me apple");
// })
// app.get( '/banana' ,(req,res) =>{
//   res.send("you call me banana");
// })

app.get( '/' ,(req,res) =>{
  res.send("you are my frend");
})

app.get('/:username/:id',(req,res) =>{
   let {username , id} = req.params;
   res.send(`welcome to the page of @${username}` + ` and your id is ${id}`);
  // res.send(`Hello, ${req.params.username}! Your ID is ${req.params.id}.`);
})
