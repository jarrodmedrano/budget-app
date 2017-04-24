export const selectExpense = (expense) => {
  console.log('You clicked on expense: ', expense.name);
  return {
    type: "EXPENSE_SELECTED",
    payload: expense
  }
};