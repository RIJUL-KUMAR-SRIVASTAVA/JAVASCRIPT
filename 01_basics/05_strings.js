const name="Rijul"
const repo_count=50
console.log(name+repo_count+"values") //older code
console.log(`Helo my name is ${name} and my repo count is ${repo_count}`)//newer code

const gamename=new String("Rijul")
console.log(gamename[0])
console.log(gamename.__Proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf("u"))

const newstring=gamename.substring(0,4)
console.log(newstring)

const anotherString=gamename.slice(-4,4)
console.log(anotherString)

const  newstring1="      rijul    "
console.log(newstring.trim())

const url="https://rijul.com/rijul%20kumar"
console.log(url.replace("%20","-"))
console.log(url.includes("sunder"))

const gamename1=new String("Rijul-Kumar-Srivastava")
console.log(gamename1.split("-"))