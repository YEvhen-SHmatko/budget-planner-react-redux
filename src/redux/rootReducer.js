import { combineReducers } from 'redux';
import budgetAppReducer from './budgetApp/budgetAppReducer';

const rootReducer = combineReducers({
  budgetApp: budgetAppReducer,
});
export default rootReducer;
