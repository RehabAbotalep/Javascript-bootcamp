const account = {
    name: 'Andrew Mead',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount : amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount : amount
        })

    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncomes = 0
        this.expenses.forEach(function (item){
            totalExpenses+= item.amount
        })
        this.incomes.forEach(function (item){
            totalIncomes+= item.amount
        })
        let balance = totalIncomes - totalExpenses
        
        return `${this.name} has $${balance} . $${totalIncomes} in income. $${totalExpenses} in expenses.`
    }
}



account.addExpense('Rent', 100)
account.addExpense('Coffee', 10)
account.addIncome('Project', 1000)

console.log(account.getAccountSummary())
