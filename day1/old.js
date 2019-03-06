

//write file , read file , exist ,  asynchronus versions
const fs = require('fs');
const x =  process.argv ;
const path = 'todo'
let data;

if ( x[2] === "create" ){
  console.log("create")
  Readfile(add)
  }
else if ( x[2] === "edit" ) {

}
else if ( x[2] === "remove" ) {

}
else if ( x[2] === "list" ) {

}


function add (err, contents){
  if(err) throw err;
  console.log(contents)
  console.log(err)
  var str = '{ "name": "John Doe", "age": 42 }';
  var obj = JSON.parse(contents);
  console.log(obj)
  //console.log("hi",obj);
  data = obj;
  //data.push({})
}


function Readfile(cb){
  if (fs.existsSync('todo')) {
    // Do something
    fs.readFile('todo', 'utf8', cb(err, data))}
    else{
      console.log("not exist")
      f = fs.openSync(path, 'w')
      console.log("done")
      return []
    }
};


//read : exist >> read  or notexist create
// write :
