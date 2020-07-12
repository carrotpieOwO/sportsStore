//var connect = require("connect");

//connect.createServer(connect.static("../angularjs/app.html")).listen(5000);
//connect().use("../angularjs", connect.static("../angularjs")).listen(5000);

// const express = require("express");
// //express 모듈을 가져옴
// const app = express();
// //express() 펑션을 이용해서 express앱을 만듦
// const port = 5000;
// //포트 설정

// app.get("/", (req, res) => res.send("Hello World!"));
// //express앱의 루트 디렉토리로 오면 hello world 출력되게 해줌

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );
// //이 앱의 포트 5000번에서 실행함

var http = require('http'); 
var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈

// 404 error message : 페이지 오류가 발생했을때, 
function send404Message(response){ response.writeHead(404,{"Content-Type":"text/plain"}); 
// 단순한 글자 출력 
response.write("404 ERROR... "); response.end(); }

// 200 Okay : 정상적인 요청 
function onRequest(request, response){ 
    if(request.method == 'GET' && request.url == '/'){ 
        response.writeHead(200,{"Content-Type":"text/html"});
         // 웹페이지 출력 
         fs.createReadStream("../angularjs/app.html").pipe(response); 
         // 같은 디렉토리에 있는 index.html를 response 함 
        } else { // file이 존재 하지않을때, 
            send404Message(response); } }

http.createServer(onRequest).listen(5000); console.log("Server Created...");​
