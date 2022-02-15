const fs = require("fs");



          //   READING FILES

// fs.readFile('./docs/blogs1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('hey you')



              //    WRITING FILES

// fs.writeFile("./docs/blogs2.tx", "HTML is a Language", () => {
//   console.log("a file was written");
// });



        //  DIRECTORIES
if(!fs.existsSync('./assets')) {
    fs.mkdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("a new folder created");
    });        

} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}




// DELETING FILES

if(fs.existsSync('./docs/delete.txt')) {
   fs.unlink('./docs/delete.txt', (err) => {
       if(err) {
           console.log(err);
       }
       console.log('file deleted');
   })
}