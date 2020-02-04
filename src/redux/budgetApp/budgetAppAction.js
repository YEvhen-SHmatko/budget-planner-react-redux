import types from './budgetAppTypes';

export const setBudgetAction = value => {
  return {
    type: types.SET_BUDGET,
    payload: {
      budget: value,
    },
  };
};

export const addExpenseAction = data => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense: data,
    },
  };
};

export const removeExpenseAction = value => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id: value,
    },
  };
};
