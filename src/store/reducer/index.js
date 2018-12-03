import { combineReducers } from 'redux';
import { ticket } from './ticket'
import { trip } from './trip'
import { person } from './person'
const RootReducer = combineReducers({
  ticket,
  trip,
  person
})

export default RootReducer;

