// Get saved todos from localstorage
const getSavedTodos = function () {
    const todosJson = localStorage.getItem('todos')

    if(todosJson !== null){
        return JSON.parse(todosJson)
    }
    return []
}

// Save todo to localstoreage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Generate Todo DOM
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.title
    return p
}

// Generate summary DOM
const generateSummaryDom = function (inCompletedTodosLength) {
    const summary = document.createElement('h1')
    summary.textContent = `You have ${inCompletedTodosLength} todos left`

    return summary
}

// Reneder todos
const renderTods = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchTxt.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if(filters.hideCompleted){
            return !todo.completed
        }else{
            return true
        }
    })

    const inCompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDom(inCompletedTodos.length))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}