import apiList from '../../assets/js/config';
import $ajax from '../../assets/js/ajax.js';

export const TICKET_LIST = 'ticket_list';
export const TICKET_DETAIL = 'ticket__detail';

/**
 * @Func ticketList
 * @Des 查询火车票列表
 */
const ticketListActions = (data) => ({
  type: TICKET_LIST,
  list: data
});
export const ticketList = () => {
  return (dispatch) => {
    $ajax({
      url: apiList.ticketList
    }).then(data => {
       dispatch(ticketListActions(data.data))
    })
  }
}

/**
 * @Func ticketList
 * @Des 查询火车票详情
 */
const ticketDetailActions = (data) => {
  return {
    type: TICKET_DETAIL,
    data
  }
}
export const ticketDetail = () => {
  return (dispatch) => {
    $ajax({
      url: apiList.ticketDetail
    }).then(data => {
       dispatch(ticketDetailActions(data.data))
    })
  }
}