import { combineReducers } from 'redux';
import { ticket } from './ticket'
import { trip } from './trip'
const RootReducer = combineReducers({
  ticket,
  trip
})

export default RootReducer;

