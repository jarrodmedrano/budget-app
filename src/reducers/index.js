import {combineReducers} from 'redux';
import expenseReducer from './reducer-expenses';

const allReducers = combineReducers({
  expenses: expenseReducer
});

export default allReducers;