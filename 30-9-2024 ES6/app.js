var name = "nafees";
name = "ali"
console.log(name)

let name1 = "ahmed"
name1 = "shayan"
console.log(name1)

const val = 20
// val = 10
console.log(val)



let getname = "asad"
function getData(){
    console.log("data", getname)
}
getData()


function dataGet(){
    let str = "umar"
    
    console.log(str)
}
dataGet()



function abc(person){
    console.log(person)
    
}
abc("qwerty")






function getVal(p){
    p.name = "fareed"
    p.age = 20
   
    console.log("BioData",bioData)
}
let bioData = {
    name: "nafees",
    age: 24
}
getVal(bioData)





function arrData(a){
    a.push(4,5,6,"nafees",true)
    console.log("array", arr)


}

let arr = [1,2,3]
arrData(arr)




const x = 1;
{
    const x = 2;
    console.log(x); 
}