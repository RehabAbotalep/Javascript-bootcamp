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

todos.splice(2, 1)
todos.push('New added todo')
todos.shift()

// console.log(print(todos[0]))
// console.log(print(todos[todos.length - 2]))

console.log(todos)