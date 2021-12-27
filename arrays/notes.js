let notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('New note')

// console.log(notes.shift())
// notes.unshift('My first note')

// adding new item 
// notes.splice(1, 0, 'New added item')

//delete item and replace with a new one
// notes.splice(1, 1, 'New added item')

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(`notes[${index}] = ${item}`)
})


console.log(notes.length)
console.log(notes)