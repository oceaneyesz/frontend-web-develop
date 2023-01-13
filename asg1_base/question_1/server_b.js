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
const net = require("net");

var Number = 0, count = 0;
const server = net.createServer(function (socket) {
    socket.setEncoding('utf8');
    Number = Number + 1;
    if(Number <= 3) {count = Number;}
    else {count = 0;}
    const message = {
        "total_likes": count
    };
    socket.write(JSON.stringify(message), function () {
        console.log("like");
    });
    socket.on('data', function(data) {
        //console.log(data);
        socket.end();
    });
});

server.listen(3000, "127.0.0.1", function () {
    console.log("opened server on:", server.address());
});
server.on('close', function () {
    //console.log('close connection');
});
server.on('error', function (err) {
    //console.log('error!', err);
});