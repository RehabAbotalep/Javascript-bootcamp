var firstName = 'Andrew'
firstName = 'Mike'

console.log(firstName)

var firstName = 'New'

console.log(firstName)


//var has a function scope
if(10 === 10){
    var age = 20
}

console.log(age)

const setName = function () {
    var name = 'Andrew'
}

console.log(name)