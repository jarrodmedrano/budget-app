import {combineReducers} from 'redux';
import expenseReducer from './reducer-expenses';
import { reducer as form } from 'redux-form';

const allReducers = combineReducers({
  form,
  expenses: expenseReducer
});

export default allReducers;