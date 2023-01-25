//make a server
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log("request has been made from browser to server");
  // console.log(req.method);
  // console.log(req.url);

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
    
    default:
      path += "/404.html";
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
