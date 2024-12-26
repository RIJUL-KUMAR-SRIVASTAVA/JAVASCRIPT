// const tinderuser = new Object()  //single term object

const tinderuser={} //multiple single term object
tinderuser.id="1234"
tinderuser.name="rahul"
tinderuser.isloggedinn=false

// console.log(tinderuser)
const regularuser = {
    email:"some@gmail.com",
    name:{
        fullname:{
            firstname:"rijul",
            lastname:"srivastava"
        }
    }
}
// console.log(regularuser.name.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
const obj3=Object.assign({},obj1,obj2,obj4)//merging two object
// console.log(obj3)

obje=[{
    id:1,
    email:"r@gmail.com"
},
{
    id:1,
    email:"r@gmail.com"
},
{
    id:1,
    email:"r@gmail.com"
}]
console.log(obje[1].email)
console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("isloggedinn"))