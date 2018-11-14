import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css'
import './assets/css/common.css'
import 'corlib/lib/iconfont.css'
import 'corlib/lib/flex.css'
import 'corlib/lib/base.css'
import 'corlib/lib/rem.js'
import App from './views/App';
import $ajax from './assets/js/ajax.js'
React.$ajax = $ajax
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
