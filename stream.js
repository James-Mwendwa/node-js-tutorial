const fs = require('fs');

const readStream = fs.createReadStream('./docs/blogs3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blogs4.txt');

readStream.on('data', (chunk) => {
    console.log('------NEW CHUCK------');
    console.log(chunk);
    writeStream.write('\nNEW STREAM\n');
    writeStream.write(chunk);
})

// PIPING (Alternative for on() method)

readStream.pipe(writeStream);