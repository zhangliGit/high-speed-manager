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
  return async (dispatch) => {
    const params = {
      url: apiList.ticketList
    }
    let data = await $ajax.get(params);
    dispatch(ticketListActions(data.data));
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
  return async (dispatch) => {
    const params = {
      url: apiList.ticketDetail
    }
    let data = await $ajax.get(params);
    dispatch(ticketDetailActions(data.data));
  }
}