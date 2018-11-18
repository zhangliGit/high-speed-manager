import { NEWS_INFO } from '../action/trip'


/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = []
export const trip = (state = intiState, action) => {
    switch(action.type) {
        case NEWS_INFO :
        return [
            ...action.list
        ]
        default: 
        return state
    }
}