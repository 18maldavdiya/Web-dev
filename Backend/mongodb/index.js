const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then((res)=>{
     console.log("Connected to MongoDB");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,

});

const practice = mongoose.model("practice", userSchema);
const user1 = new practice({
  name: "Adam",
  age: 25,
  email : "adam@gmail.com"
});