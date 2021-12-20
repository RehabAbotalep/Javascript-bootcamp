let myBook = {
    title: '1984',
    author: 'Gorge Orwel',
    pagesCount: 384
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadeliphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age +1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
