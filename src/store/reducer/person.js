import { RIDER_LIST } from '../action/person'


/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = {
  riderList: []
}
export const person = (state = intiState, action) => {
    switch(action.type) {
        case RIDER_LIST :
        return {
          ...state,
          riderList: action.list
        }
        default: 
        return state
    }
}