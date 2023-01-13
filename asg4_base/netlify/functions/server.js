/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.

 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the
disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Zhao Yuyang 
 * Student ID : 1155181315 
 * Date : 2022.12.15
 */ 

// Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format

// import "./connect_db.js"

const mongoose = require('mongoose');
const fs = require('fs');
const { readFileSync } = require('fs');

const postSchema = new mongoose.Schema({
    // _id:{type:ObjectID},
    Email_address: {type:String},
    Message: {type:String},
},{
    timestamps: { createdAt: 'created'},
  });


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://s1155181315:1qaz2wsx@eclt5830.7o6pwsm.mongodb.net/my_asg3_db?retryWrites=true&w=majority";
mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("Connect mongodb successfully!")
});
mongoose.connection.on("error", (error) => {
  console.log("Connect mongodb error!", error)
});

var blog = mongoose.models.blog || mongoose.model('blog',postSchema)
exports.handler = async function (event, context) {
    var m_data
    // console.log(event)
    // if (event.httpMethod === "GET") {
    //     blog.find(function(error,return_data){
    //         if (error != null) {
    //             console.log(error);
    //         }
    //         return_data = JSON.stringify(return_data);
    //         console.log(return_data)
    //         m_data = return_data
    //     })
    //     console.log(m_data)
    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify({value: m_data}),
    //     };
    // }

      if (event.httpMethod === "POST") {
        let body = JSON.parse(event.body)
        blog.create({
            Email_address:body.Email_address,
            Message:body.Message},function(error,return_the_data){
              if(!error) {
                console.log("add finish!")
                blog.find(function(error,return_data){
                  if (error != null) {
                      console.log(error);
                  }
                  return_data = JSON.stringify(return_data);
                  fs.writeFileSync('user.json', return_data);
                    console.log("JSON data is saved.");
                    // I have to use json file to do it because I spend almost half of day to deal with it and fail... 
                });
                }
              else {
                console.log(error)
              }
            })
        const mdata = readFileSync('user.json');
        const m_data = JSON.parse(mdata.toString());
        console.log(m_data)
        return {
            statusCode: 200,
            body: JSON.stringify({value: m_data}),
          };
      }
    else {
        return {
            statusCode: 405,
            body: JSON.stringify({value: "Method not supported"})
        }
    }
    
};
// mongoose.connection.close();