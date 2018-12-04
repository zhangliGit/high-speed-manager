import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../assets/component/Header';
import validateForm from '../../assets/js/validate-form';
import yzForm  from '../../assets/js/form-data';
import { Picker, List, Toast } from 'antd-mobile';
export default class AddRider extends React.Component {
 static contextTypes = {
   router: PropTypes.object.isRequired
 }
 constructor() {
   super();
   this.state = {
     value: [],
     visible: false,
     form: {
      name: '',
      cardType: [],
      cardNo: ''
     },
     cardTypeList: [
       {
         value: '身份证',
         label: '身份证'
       },
       {
         value: '港澳通行证',
         label: '港澳通行证'
       },
       {
        value: '护照',
        label: '护照'
        },
        {
          value: '台湾居民身份证',
          label: '台湾居民身份证'
        }
     ]
   }
 }

 onChange(key, v, e) {
    let val = e.target.value;
    if (key === 'name') {
      this.setState({
        form: {
          ...this.state.form,
          name: val
        }
      })
    } else if (key === 'cardNo') {
      this.setState({
        form: {
          ...this.state.form,
          cardNo: val
        }
      })
    }
 }
 // 新增乘车人
  addRider() {
    validateForm(yzForm.addRider, this.state.form, () => {
      Toast.success('添加成功', 1.2, null);
      setTimeout(() => {
        this.context.router.history.goBack();
      }, 1200)
    })
  }
  onChangeType(val) {
    this.setState({
      value: val,
      form: {
        ...this.state.form,
        cardType: val[0]
      }
    }, () => {
    })
  }
  render() {
    return (
      <div className ="co-flex co-ver co-Page">
        <Header title = "新增乘车人" isBack></Header>
        <div className = "co-f1">
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>姓名</div>
            <div className = "co-f1 co-mg-l1">
              <input onChange = { this.onChange.bind(this, 'name', '') } placeholder="请输入姓名" style = { _styles.input } />
            </div>
          </div>
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>证件类型</div>
            <div onClick= { () => { this.setState({visible: true})}} className = "co-f1 co-flex co-je co-tx-r co-cl-3" style = {{ height: "1.8rem", lineHeight: "1.8rem" }}>
              <Picker
                data={this.state.cardTypeList}
                value={this.state.value}
                cols={1}
                onChange={this.onChangeType.bind(this)}
              >
                <List.Item arrow="horizontal"></List.Item>
              </Picker>
            </div>
          </div>
          <div>
          </div>
          <div className="co-flex co-ac co-pd-a05 co-bd-b co-bg-0">
            <div>证件号码</div>
            <div className = "co-f1 co-mg-l1">
              <input onChange = { this.onChange.bind(this, 'cardNo', '') } placeholder="请输证件号码" style = { _styles.input } />
            </div>
          </div>
          <div onClick  = { this.addRider.bind(this) } className="co-mg-a08 co-bg-6 co-pd-a06 co-br-a0 co-tx-c co-cl-0">添加</div>
        </div>
      </div>
    )
  }
}

const _styles = {
  input: {
    height: "1.8rem",
    border: "none",
    width: "100%",
    lineHeight: "1.8rem",
    padding: "0 ..4rem"
  }
}