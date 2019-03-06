#!/usr/bin/env node

//write file , read file , exist ,  asynchronus versions
const fs = require('fs');
const x =  process.argv ;
const path = 'todo.json'
let data;

(function run(){

if ( x[2] === "create" ){
  console.log("create")
  Readfile(add)
  }
else if ( x[2] === "edit" ) {
  Readfile(edit)
}
else if ( x[2] === "remove" ) {
  Readfile(remove)
}
else if ( x[2] === "check" ) {
 Readfile(check)
}
else if ( x[2] === "uncheck" ) {
 Readfile(uncheck)
}
else if ( x[2] === "list" ) {
 Readfile(list)
}
else if ( x[2] === "list-checked" ) {
 Readfile(list_checked)
}
else if ( x[2] === "list-unchecked" ) {
 Readfile(list_unchecked)
}

})();

function list(contents){
  let obj =JSON.parse(contents);
  obj.forEach((i)=>{
    console.log(i);
  })
}

function list_checked(contents){
  let obj =JSON.parse(contents);
  const edited_list = obj.filter((i)=>{
    if ( i.checked == true ){ return i }
  })
  console.log(edited_list)
}

function list_unchecked(contents){
  let obj =JSON.parse(contents);
  const edited_list = obj.filter((i)=>{
    if ( i.checked == false ){ return i }
  })
  console.log(edited_list)
}

function uncheck( contents  ){
  let obj =JSON.parse(contents);
  const edited_list = obj.map((i)=>{
    if ( i.id == x[3])
    {
      i.checked = false
      return i
    }
    else{return i}
  })
  console.log(edited_list)
  WriteFile(edited_list)
}


function check(contents){
    let obj =JSON.parse(contents);
    const edited_list = obj.map((i)=>{
      if ( i.id == x[3])
      {
        i.checked = true
        return i
      }
      else{return i}
    })
    console.log(edited_list)
    WriteFile(edited_list)
}

function remove(contents){

  let obj =JSON.parse(contents);
  const edited_list = obj.map((i)=>{
    if ( i.id == x[3]){}
    else{return i}
  })
  console.log(edited_list)
  WriteFile(edited_list)
}

function edit( contents  ){

  let obj =JSON.parse(contents);
  const edited_list = obj.map((i)=>{
    if ( i.id == x[3])
    {
      i.title = x[4]
      return i
    }
    else{return i}
  })
  console.log(edited_list)
  WriteFile(edited_list)
}

function add ( contents ){
  //if(err) throw err;
  console.log(contents)
  let obj =JSON.parse(contents);
  let new_to = {
    "id":obj.length,
    "title": x[3],
    "checked":false
  }
  obj.push(new_to);
  console.log(obj)
  WriteFile(obj)
  //data.push({})
}

function Readfile(cb){
  if (fs.existsSync('todo.json'))
    {
    // Do something
    let cont = fs.readFileSync('todo.json', 'utf8')
    cb(cont);
    }
    else
    {
      console.log("not exist")
      f = fs.openSync(path, 'w')
      console.log("done")
      cb("[]")
    }
};

function WriteFile(obj){
    var json = JSON.stringify(obj);
    fs.writeFile('todo.json', json);
}
