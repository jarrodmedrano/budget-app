export const selectExpense = (expense) => {
  console.log('You clicked on expense: ', expense.expenseName);
  return {
    type: "EXPENSE_SELECTED",
    payload: expense
  }
};