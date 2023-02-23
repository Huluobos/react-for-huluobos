import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import Home from './components/Home'
import Text from './components/Text'

import './Layout.css';

const Layout = () => (
  <div className="Layout">
    <Button type="primary">Button</Button>
    <Home className='warn'/>
    <Text dataQ='qaq'/>
  </div>
);

export default Layout;