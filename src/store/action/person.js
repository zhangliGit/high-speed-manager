import apiList from '../../assets/js/config';
import $ajax from '../../assets/js/ajax.js';

export const RIDER_LIST = 'rider_list';

/**
 * @Func ticketList
 * @Des 查询火车票列表
 */
const riderListActions = (data) => ({
  type: RIDER_LIST,
  list: data
});
export const getRiderList = () => {
  return async (dispatch) => {
    const params = {
      url: apiList.riderList
    }
    let data = await $ajax.get(params);
    dispatch(riderListActions(data.data));
  }
}