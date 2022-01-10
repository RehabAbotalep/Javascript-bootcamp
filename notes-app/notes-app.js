let notes = []

// // Query and remove
// const p = document.querySelector('p')
// p.remove()

// // Query and remove all 
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p){
//     p.textContent = '******'
//     console.log(p.textContent)
//     //p.remove()
// })

const filters = {
    searchText: ''
}

const notesJson = localStorage.getItem('notes')

if(notesJson !== null) {
    notes = JSON.parse(notesJson)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        if(note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//localStorage.setItem('location', 'Egypt')

console.log(localStorage.getItem('location'))

localStorage.removeItem('location')

// const user = {
//     name: 'Andrew',
//     age: 27
// }

// const userJson = JSON.stringify(user)
// localStorage.setItem('user', userJson)

const user = JSON.parse(localStorage.getItem('user'))

console.log(`${user.name} is ${user.age}`)

// // create new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'New paragraph from javascript'
// document.querySelector('body').appendChild(newParagraph)

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
})

document.querySelector('#sort-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

