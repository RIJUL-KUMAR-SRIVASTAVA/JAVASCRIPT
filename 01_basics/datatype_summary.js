//primitive type- 7types= string, number, boolean, symbol, null, undefined, bigint
//reference type(non-primitive)= Array, Object, Functions
//array
const heros=["SHAKTIMAN","IRONMAN","THOR"]
console.log(heros)

//object
let obj={
    name:"rijul",
    age:21
}
console.log(obj)

//functions
const myfunction=function(){
    console.log("hello world")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack=primitive and heap=non primitive
//stack = here a copy of data is given to update anything
let myname="Rijul"
let myname1=myname
myname1="Rahul"
console.log(myname)
console.log(myname1)

//reference=here no copy is given as the data is in heap memory so it directly data and update it from heapmemory

let user1={
    name:"rijul",
    email:"rijul@gmail.com"
}
let user2=user1
user2.email="atul@gmail.com"
console.log(user1)
console.log(user2)