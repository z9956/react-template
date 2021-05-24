import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';

import reportWebVitals from './reportWebVitals';
import App from '@/pages/App';
import './index.scss';

// 严格模式，所有observe的数据只能通过action修改
configure({ enforceActions: 'observed' });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
