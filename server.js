const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
//   res.setHeader('content-Type', 'text/html');
//   res.write('<p>hello, devs</p>');
//   res.write("<p>hello again, devs</p>");
//   res.end();


//send an html file

fs.readFile('./views/index.html', (err, data) => {
    if(err) {
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
}) 


});

server.listen(3000, "localhost", () => {
  console.log("listening to port 3000");
});
