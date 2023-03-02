
import React, { Component, Suspense  } from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { HashRouter } from 'react-router-dom';

import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';
import Layout from './Layout';

import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import Counter from './store/Counter'
import reducer from './store/reducers'

const sagaMiddleware = createSagaMiddleware();
// 配合浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) : compose;


const store =createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const action = type => store.dispatch({type})
console.log('action: ', action);


function render() {
  ReactDOM.render(
    <Counter
      value={2}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)