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

const inCompletedTodos = todos.filter(function (todo) {
    return !todo.completed
})


const newParagraph = document.createElement('p')
newParagraph.textContent = `You have ${inCompletedTodos.length} todos left`
document.querySelector('body').appendChild(newParagraph)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.title
    document.querySelector('body').appendChild(p)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Adding new TODO')
})

document.querySelector('#new-todo').addEventListener('change', function (e) {
    console.log(e.target.value)
})



// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     if(p.textContent.includes('the')){
//         p.remove()
//     }
// })