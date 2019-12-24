export default (expenses = []) => expenses
    .map(expense => expense.amount)
    .reduce((acc, val) => acc + val, 0);