import types from './budgetAppTypes';

const initialState = {
  budget: 0,
  expenses: [],
};
const budgetAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return {
        ...state,
        budget: action.payload.budget,
      };
    case types.ADD_EXPENSE:
      return {
        ...state,
        expenses: [action.payload.expense, ...state.expenses],
      };
    case types.REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
export default budgetAppReducer;
