const todos = [{
    title: 'Order cat food',
    completed: false
}, {
    title: 'Clean the kitchen',
    completed: true,
}, {
    title: 'Do work',
    completed: true,
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

const sortTodos = function (todos) {
    todos.sort(function (a, b){
        if(a.completed && !b.completed){
            return -1
        }else if(b.completed && !a.completed){
            return 1
        }else{
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Do Work')
// console.log(todos)

// deleteTodo(todos, 'not found todo')
// console.log(todos)