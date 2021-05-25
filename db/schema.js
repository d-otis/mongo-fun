const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mongo_fun", {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

const postSchema = new mongoose.Schema({
  title: String,
  body: String
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema]
})

const Post = new mongoose.model("Post", postSchema)
const User = new mongoose.model("User", userSchema)

let danny = new User({
  name: "Danny",
  email: "dan.dorff@gmail.com"
})

danny.save((err, user) => {
  if(err) {
    console.log(err)
  } else {
    console.log(user)
  }
})

db.on("error", console.error.bind(console, "connection error: "))
// db.once("open", () => {
//   console.log('connected')
//   let danny = new User({
//     name: "Danny",
//     email: "dan.orff@gmail.com"
//   })

//   danny.save((err, user) => {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log(user)
//     }
//   })
// })



console.log('hiiii')
