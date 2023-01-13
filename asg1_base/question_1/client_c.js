/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
QUESTION 1: MORE ON CLIENT-SERVER
Please put all your source code about this problem under a folder named
question_1
In this problem, we are going to solve some scenarios by modifying the our
client.js and server.js built in the lab session.
Both programs should always print their received message to the console. No extra
third-party package is allowed but you can write and import your own package if
you need.
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : Zhao Yuyang
 * Student ID : 1155181315
 * Date : 2022/10/24
 */
var net = require('net');
var client = new net.Socket();
var times = 0;

var arr = [2, 3, 4 ,5, 1, 6, 7];//You can modify the array in there.

client.connect(3000, '127.0.0.1', function() {
    client.write(JSON.stringify(arr));
    //console.log("connect successfully");
});
client.on("data", function (data) {
    console.log(JSON.parse(data));
});
client.on("end", function () {
    //console.log("end")
});