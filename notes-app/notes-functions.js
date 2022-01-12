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

// Generate DOM element
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')
    if(note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed note'
    }

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