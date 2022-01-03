//let notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('New note')

// console.log(notes.shift())
// notes.unshift('My first note')

// adding new item 
// notes.splice(1, 0, 'New added item')

//delete item and replace with a new one
// notes.splice(1, 1, 'New added item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(`notes[${index}] = ${item}`)
// })


// // console.log(notes.length)
// // console.log(notes)

// for(i = 0; i<= 10; i++){
//     console.log(i)
// }

// for(i=0; i<notes.length - 1; i++){
//     console.log(notes[i])
// }

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'

}, {
    title: 'Habbits to work on',
    body: 'Excercises'
}, {
    title: 'Office modifications',
    body: 'get a new seat'
}]

const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
})

//console.log(index)

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modifications')
console.log(note)