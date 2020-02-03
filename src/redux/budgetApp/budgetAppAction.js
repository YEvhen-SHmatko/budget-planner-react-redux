import types from './budgetAppTypes';

export const setBudgetAction = value => {
  return {
    type: types.SET_BUDGET,
    payload: {
      budget: value,
    },
  };
};

export const addExpenseAction = expense => {
  return {
    type: types.ADD_EXPENSE,
    payload: {
      expense,
    },
  };
};

export const removeExpenseAction = id => {
  return {
    type: types.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
