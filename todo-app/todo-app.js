let todos = getSavedTodos()

const filters = {
    searchTxt: '',
    hideCompleted: false
}

renderTods(todos, filters)


document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchTxt = e.target.value
    renderTods(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        'id': uuidv4(),
        title: e.target.elements.title.value,
        completed: false
    })
    saveTodos(todos)
    e.target.elements.title.value = ''
    renderTods(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTods(todos, filters)
})
