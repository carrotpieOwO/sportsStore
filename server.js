var connect = require("connect");

//connect.createServer(connect.static("../angularjs/app.html")).listen(5000);
connect().use("../angularjs", connect.static("../angularjs")).listen(5000);

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
