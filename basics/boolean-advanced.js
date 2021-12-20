let isAccountLocked = false
let userRole = 'admin'

if(isAccountLocked){
    console.log('Is account locked')
}else if(userRole === 'admin'){
    console.log('Welcome admin')
}else{
    console.log('Welcome!')
}

//challange area
let temp = 45
if(temp <= 32){
    console.log('It is freazing outside')
}else if(temp >= 65){
    console.log('It is hot outside')
}else{
    console.log('It is pretty outside')
}