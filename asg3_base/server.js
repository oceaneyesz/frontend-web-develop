import { connect, connection, Schema, model } from 'mongoose';
import express, { json } from "express";
import { writeFileSync } from 'fs';
import { ObjectID } from 'bson';
import { ObjectId } from 'mongodb';
const app = express();
app.use(json());

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://s1155181315:1qaz2wsx@eclt5830.7o6pwsm.mongodb.net/my_asg3_db?retryWrites=true&w=majority";
connect(uri);

connection.on("connected", () => {
  console.log("Connect mongodb successfully!")
});
connection.on("error", (error) => {
  console.log("Connect mongodb error!", error)
});

const postSchema = new Schema({
  // _id:{type:ObjectID},
  title: {type:String},
  description: {type:String},
  contents: {type:String}
  // The schema is incomplete...
});

var post = model('post',postSchema)

app.get("/posts", async function (req, res) {
  if (!req.query || Object.keys(req.query).length === 0) {
    // TODO: a) Return all posts
    post.find(function(error,return_data){
      res.send(return_data)
      if (error != null) {
        console.log(error);
      }
    })
    console.log(req.query); // you can remove this line
    // connection.close();
    console.log("Closed!")

  } else {
    // TODO: b) Find posts based on matched key/value, return an array of them
    let query = postSchema;
    console.log(req.query.title)
    console.log(req.query.description)
    console.log("1")
    if(req.query.title!="") {
      query['title'] = req.query.title;
    }else {
      query['title'] = {$regex:''}
    }
    if(req.query.description != undefined) {
      query['description'] = req.query.description
    }else {
      query['description'] = {$regex:''}
    }
    if(req.query.contents != undefined) {
      query['contents'] = req.query.contents
    }else{
      query['contents'] = {$regex:''}
    }
    post.find({title:query['title'], description:query['description'], contents:query['contents']},function(error,return_data) {
      res.send(return_data)
      if (error != null) {
        console.log(error);
      }
    })
    // console.log(req.query); // you can remove this line
    // connection.close();
    console.log("Closed!")
  }
});

app.get("/posts/:post_id", async function (req, res) {
  // TODO: c) Find post based on its id, return it
  //! In the end I found I save the json as a file instead of a document... 
  post.find({_id:ObjectId(req.params.post_id)},function(error,return_data){
    //!could we use findbyone? or other
    // console.log(ObjectId(req.params.post_id)); // you can remove this line
    // console.log(return_data)
    var content = JSON.stringify(return_data);
    // console.log(mongoose.Types.ObjectId(req.params.post_id))
    res.send(return_data);
    // console.log(content)
    // console.log(content.length)
    // var data_output = new postSchema([content], {type: "text/plain;charset=utf-8"});
    if (content.length != 2) {
      writeFileSync('data_output.json', content);
      console.log("JSON data is saved.");
    }
    else {
      writeFileSync('data_output.json', "");
      console.log("JSON data is empty.");
    }
    // connection.close();
    console.log("Closed!")
  })
  

});

app.post("/posts", async function (req, res) {
  // TODO: d) Insert a new post into collection
  console.log("555!!!")
  console.log(req.body.title)
  post.create({
    title:req.body.title,
    description:req.body.description,
    contents:req.body.contents},function(error,return_data){
      if(!error) {
        console.log("add finish!")
        res.send(return_data.id)
      }else{
        console.log(error)
      }
    })
    console.log("success!")
    // connection.close();
});

// !! This line must be at the bottom
const port = 3001;
app.listen(port, () =>
  console.log(`API server listening at http://localhost:${port}`)
);
