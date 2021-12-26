const todos = [
    'Order cat food',
    'Make my bed', 
    'Call my friend', 
    'Clean the kitchen',
    'Do work'
]

const print = function (todo) {
    return `Todo : ${todo}`
}

console.log(`You have ${todos.length} todos`)

console.log(print(todos[0]))
console.log(print(todos[todos.length - 2]))