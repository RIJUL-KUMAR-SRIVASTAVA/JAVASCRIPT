let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof date)

let mycreatedate=new Date(2023,0,23)
let mycreatedate1=new Date(2023,0,23,5,3)
console.log(mycreatedate.toLocaleString())
console.log(mycreatedate1.toLocaleString())

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000))

let newdate1=new Date()
console.log(newdate1)
console.log(newdate1.getMonth()+1)
