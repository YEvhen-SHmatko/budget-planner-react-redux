import { createStore, combineReducers } from 'redux';
import budgetAppReducer from './budgetApp/budgetAppReducer';

const rootReducer = combineReducers({
  budgetApp: budgetAppReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
