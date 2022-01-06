
// Query and remove
const p = document.querySelector('p')
p.remove()

// Query and remove all 
const ps = document.querySelectorAll('p')
ps.forEach(function (p){
    p.textContent = '******'
    console.log(p.textContent)
    //p.remove()
})

// create new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'New paragraph from javascript'
document.querySelector('body').appendChild(newParagraph)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search').addEventListener('input', function (e) {
    console.log(e.target.value)
})

