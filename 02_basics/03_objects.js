//object literals
const mysym=Symbol("key1")
const myobj={
    name:"rijul",
    "my full name":"Rijul Kumar Srivastava",
    [mysym]:"mykey1",
    age:21,
    email: "atul@google.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
console.log(myobj["my full name"])
console.log(myobj.email)
console.log(myobj["email"])
console.log(myobj[mysym])

myobj.email="rijul@facebook.com"
// Object.freeze(myobj)
myobj.email="rijul@instagram.com"
console.log(myobj)

myobj.greeting=function(){
    console.log("Hello JS user");
}
myobj.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`)
}
console.log(myobj.greeting)
console.log(myobj.greetingTwo)