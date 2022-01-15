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

// Remove todo
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// change Todo Completed value
const toggoleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    
    todo.completed = !todo.completed
}

// Generate Todo DOM
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')
    const todoText = document.createElement('span')

    // Setup Check box
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function () {
        toggoleTodo(todo.id)
        saveTodos(todos)
        renderTods(todos, filters)
    })

    // Setup todo text
    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    // Setup todo delete button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTods(todos, filters)
    })


    return todoEl
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

