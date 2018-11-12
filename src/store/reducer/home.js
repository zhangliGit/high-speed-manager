import { HOME_LIST } from '../action/home'

const initState = [];

export const homeList = (state = initState, action) => {
  switch(action.type) {
    case HOME_LIST :
    return [
      ...state
    ]
    default: 
    return state
  }
}
