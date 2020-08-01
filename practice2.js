//synchronous and asynchronous file methods in nodejs
//FS = file system in node js
// read, write and delete the file
var fs = require('fs')

fs.readFile('calc.js','utf8',function(err,data){
    console.log(data);
})
fs.readFile('app.js','utf8',function(err,data){
    console.log(data);
});
fs.writeFile('calx.js','console.log("hii vijji")',function(err){
    console.log("file created");
})

//append file
fs.appendFile('calx.js', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//delete
fs.unlink('calx.js',function(err){
    console.log("file deleted");
})
var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('sai.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
//Rename the file "sai.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
 //synchronous methods of file system in nodejs
 var fs=require('fs');
let data="This is fine saturday";
let sai="sai is the one of the experienced coder"+"his full name is hemasaimkumar";

fs.writeFileSync("sai.txt",data)
fs.writeFileSync("sai2.js",sai)
console.log("File has been created sucessfully");
console.log(fs.readFileSync('sai.txt','utf8'));
console.log(fs.readFileSync('sai2.js','utf8')); 

const fs = require('fs');
fs.readFile('sai.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('sai.txt');
//nodejs buffers
var buf = new Buffer("programming is simple","utf-8");
buf=new Buffer(256);
len=buf.write("programming is little difficult here");
console.log("buffer unicode return as"+" "+buf );
console.log("buffer unicode are"+len);
buf=new Buffer(26);
for(var i=0;i<26;i++){
    buf[i]=i+65
}
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii',0,5))
console.log(buf.toString('utf8',0,6))
console.log(buf.toString(undefined,0,10))
//concate two buffers
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
//compare buffers
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}
//copying the buffer from one to another
var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

var buffer = new Buffer('saikumar');
//length of the buffer
console.log("buffer length: " + buffer.length);
//By using toJSON() method returns a JSON object based on the Buffer object
var buf = Buffer.from('abc');

console.log(buf.toJSON());
