const todos = [{
    title: 'Order cat food',
    completed: false
}, {
    title: 'Clean the kitchen',
    completed: false,
}, {
    title: 'Do work',
    completed: true,
}]

const filters = {
    searchTxt: ''
}

const renderTods = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchTxt.toLowerCase())
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

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Adding new TODO')
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    filters.searchTxt = e.target.value
    renderTods(todos, filters)
})



// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     if(p.textContent.includes('the')){
//         p.remove()
//     }
// })