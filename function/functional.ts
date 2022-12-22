function getDetails(id:string,name?:string,age?:number){
    console.log(id,name,age);
}
getDetails("sam")

//var args // rest parameter

function getAge(...age:number[]){
    console.log(age);
}
getAge(10)

//default param function
function data(id:number,age:number=0,name:string=""){

    console.log(id,age,name);
}
data(12,23,"sam")