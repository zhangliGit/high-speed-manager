
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile'
axios.defaults.timeout = 15000 // 请求超时时间
function errorToast (e) {
  let info
  if (e.code) {
    info = '数据请求失败'
  } else {
    info = '请检查网络'
  }
  alert(info)
}
const $ajax = (obj, tag = true) => {
  if (tag) {
    Toast.loading('努力加载中', null, null, true);
  }
  return new Promise((resolve, reject) => {
      if (!obj.hasOwnProperty('type') || obj.type.toLowerCase() === 'get') {
        axios.get(obj.url, {
          params: obj.params
        }).then(function (response) {
          Toast.hide();
          resolve(response.data);
        }).catch(function (error) {
          Toast.hide();
          reject(error);
          errorToast(error);
        })
      } else {
        axios.post(obj.url, qs.stringify(obj.params)).then(function (response) {
          Toast.hide();
          resolve(response.data);
        }).catch(function (error) {
          Toast.hide();
          reject(error);
          errorToast(error);
        })
      }
  })
}

export default $ajax
