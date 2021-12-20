
//undefined for variables
let name = 'Rehab'

if(name === undefined){
    console.log('Please provide a name')
}else{
    console.log(name)
}

//undefined for function argument
//undefined as the function return default value

let square = function(num){
    console.log(num)
}

square()
let result = square()
console.log(result)

let age = 30
age = null
console.log(age)