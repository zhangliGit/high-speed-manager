import { TICKET_LIST, TICKET_DETAIL } from '../action/ticket'


/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = {
  list: [],
  detail: {
  }
};
export const ticket = (state = intiState, action) => {
  switch(action.type) {
    case TICKET_LIST :
    return {
      ...state,
      list: action.list
    }
    case TICKET_DETAIL :
    return {
      ...state,
      detail: action.data      
    }
    default: 
    return state
  }
}