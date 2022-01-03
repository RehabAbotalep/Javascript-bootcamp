const todos = [{
    title: 'Order cat food',
    completed: true
}, {
    title: 'Clean the kitchen',
    completed: false,
}, {
    title: 'Do work',
    completed: false,
}]

const deleteTodo = function (todos, todoTitle) {
    const index = todos.findIndex(function (todo, index){
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })

    if(index > 0){
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Do Work')
// console.log(todos)

// deleteTodo(todos, 'not found todo')
// console.log(todos)