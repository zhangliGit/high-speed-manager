import { Toast } from 'antd-mobile'
const validateForm = (yzForm, form, callback) => {
  for (let val in form) {
    if (yzForm.hasOwnProperty(val)) {
      if (form[val] === '' || JSON.stringify(form[val]) === '[]' || JSON.stringify(form[val]).indexOf('请选择') > -1) {
        Toast.info(yzForm[val], 1.2);
        return
      }
    }
  }
  callback();
}

export default validateForm