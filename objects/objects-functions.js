let myBook = {
    title: '1984',
    author: 'Gorge Orwel',
    pagesCount: 384
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howared Zinn',
    pagesCount: 740
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pagesCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challange 
let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

console.log(convertFahrenheit(32))