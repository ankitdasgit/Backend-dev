//make a server
const http = require("http");
const fs = require("fs");
const _= require('lodash');

const server = http.createServer((req, res) => {
    console.log("request has been made from browser to server");
  // console.log(req.method);
  // console.log(req.url);

//lodash use
let num = _.random(0,20);
console.log("result is "+num);

function greeting(){
  console.log("hello");
}

greeting();


  res.setHeader("context-type", "text/html");
  //   res.write("<html><body><h1>this is my response to server</h1></body></html>");
  //   res.end();

  let path = './views';

  switch (req.url) {
    case "/": 
      path += "/index.html";
      break;
    
    case '/about': 
      path += "/about.html";
      break;
     //redirect router(if you change the router and want to previous router page)
      case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location','/about');
              res.end();      
      break;

    default:
      path += "/404.html";
      res.statusCode=404;
      break;
  }

  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is listing on port 3000");
});
