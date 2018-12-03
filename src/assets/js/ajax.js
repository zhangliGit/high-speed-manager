
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile'
axios.defaults.timeout = 15000 // 请求超时时间
const showToast = (tip = '数据加载中') => {
  Toast.loading(tip, null, null, true);
}
function errorToast (e) {
  let info
  if (e.code) {
    info = '数据请求失败'
  } else {
    info = '请检查网络'
  }
  alert(info)
}
const $ajax = {
  async get(obj, tag = true) {
    if (tag) {
      showToast();
    }
    try {
      let res = await axios.get(obj.url, { params: obj.params || '' });
      Toast.hide();
      res = res.data;
      return new Promise((resolve, reject) => {
        if (res.code === 0 || res.stauts === true) {
          resolve(res);
        } else {
          resolve(res);
        }
      })
    } catch(err) {
      errorToast();
    }
  },
  async post(obj, tag = true) {
    if (tag) {
      showToast();
    }
    try {
      let res = await axios.post(obj.url, qs.stringify(obj.params));
      Toast.hide();
      res = res.data;
      return new Promise((resolve, reject) => {
        if (res.code === 0 || res.status === true) {
          resolve(res);
        } else {
          resolve(res);
        }
      })
    } catch(err) {
      errorToast();
    }
  }
}

export default $ajax
