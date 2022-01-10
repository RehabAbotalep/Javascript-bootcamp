let todos = []

const filters = {
    searchTxt: '',
    hideCompleted: false
}

const todosJson = localStorage.getItem('todos')

if(todosJson !== null){
    todos = JSON.parse(todosJson)
}

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

    const summary = document.createElement('h1')
    summary.textContent = `You have ${inCompletedTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.title
        document.querySelector('#todos').appendChild(p)
    })
}

renderTods(todos, filters)


document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchTxt = e.target.value
    renderTods(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.title.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    e.target.elements.title.value = ''
    renderTods(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTods(todos, filters)
})



// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     if(p.textContent.includes('the')){
//         p.remove()
//     }
// })