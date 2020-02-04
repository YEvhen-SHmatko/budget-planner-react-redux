import { combineReducers } from 'redux';
import types from './budgetAppTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_BUDGET:
      return action.payload.budget;
    default:
      return state;
  }
};

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [action.payload.expense, ...state];
    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload.id);
    default:
      return state;
  }
};
export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

// import types from './budgetAppTypes';

// const initialState = {
//   budget: 0,
//   expenses: [],
// };
// const budgetAppReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.SET_BUDGET:
//       return {
//         ...state,
//         budget: action.payload.budget,
//       };
//     case types.ADD_EXPENSE:
//       return {
//         ...state,
//         expenses: [action.payload.expense, ...state.expenses],
//       };
//     case types.REMOVE_EXPENSE:
//       return {
//         ...state,
//         expenses: state.expenses.filter(
//           expense => expense.id !== action.payload.id,
//         ),
//       };
//     default:
//       return state;
//   }
// };
// export default budgetAppReducer;
