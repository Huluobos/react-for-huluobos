import React, { useState } from 'react';
import { render } from 'react-dom';

import { createRoot } from 'react-dom/client';//更新后的写法
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { HashRouter } from 'react-router-dom';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';
import Layout from './Layout';
const container = document.getElementById('root');

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Layout/>
      </ConfigProvider>
    </HashRouter>
  );
};


const root = createRoot(container);
root.render(<App />);
