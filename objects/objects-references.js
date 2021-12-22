let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

// addExpense(myAccount, 2.5)
// console.log(myAccount)

//challange

let addIncome = function(account, income) {
    account.income = account.income + income
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 100)
addExpense(myAccount, 100)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
