export const selectExpense = (expense) => {
  console.log('You clicked on expense: ', expense.name);
  return {
    type: "EXPENSE_SELECTED",
    payload: expense
  }
};

const submitExpenseForm = (values) => {
  console.log(values);
  return {
    type: "EXPENSE_SUBMITTED",
    payload: values
  }
};

export default submitExpenseForm;