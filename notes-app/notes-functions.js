
// Get saved notes from localstorage
const getSavedNotes = function () {
    const notesJson = localStorage.getItem('notes')

    if(notesJson !== null) {
        return JSON.parse(notesJson)
    }else {
        return [];
    }
}

// Save notes to localstorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note element
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
    
}

// Generate DOM element
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Setup the delete button
    button.textContent = 'x'
    noteEl.appendChild(button)

    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the title text
    if(note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }

    noteEl.appendChild(textEl)
    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}