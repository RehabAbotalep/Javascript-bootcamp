let name = ' Andrew Mead '

// Length property
console.log(name.length)

// Convert to uppercase
console.log(name.toUpperCase())

// Convert to lowercase
console.log(name.toLowerCase())

// Includes method
password = '1234password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challange area
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abcd'))
console.log(isValidPassword('abcd&!1234857'))
console.log(isValidPassword('abcd&!1234857password'))
