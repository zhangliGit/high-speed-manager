const hostUrl = 'http://yapi.demo.qunar.com/mock/28776';

/**
 * 车票预定
 */
const TICKET_API = {
  'ticketList': `${hostUrl}/ticketList`,
  'ticketDetail': `${hostUrl}/ticketDetail`,
  'newsInfoList': `${hostUrl}/tripNews`
}

/**
 * 我的行程
 */
const TRIP_API = {
  'newsInfoList': `${hostUrl}/tripNews`
}

/**
 * 个人中心
 */
const PERSON_API = {
  'riderList': `${hostUrl}/riderList`
}


const API_LIST = {
  ...TICKET_API,
  ...TRIP_API,
  ...PERSON_API
}
export default API_LIST;