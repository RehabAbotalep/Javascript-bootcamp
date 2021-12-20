let add = function(a, b){
    return a + b;
}

let result = add(10, 1)
console.log(result)

let getScoreText = function(name = 'Anonymous', score = 0){
    return `Name : ${name} - Score : ${score}`
}

let output = getScoreText('Rehab', 100)
console.log(output)
console.log(getScoreText(undefined, 99))


//challange area
let getTip = function(total, tip = .2){
    return `A ${tip * 100}% tip on $${total} would be $${total * tip}`
}

let tip = getTip(60)
console.log(tip)
