import React, { Suspense,lazy } from 'react';
// import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

import { Button } from 'antd';
import 'antd/dist/reset.css';
import './Layout.css';

import Home from './components/day1/Home'
import Text from './components/day1/Text'
import Text2 from './components/day1/Text2'
import Text3 from './components/day1/Text3'
// import Text4 from './components/Text4'
// import Text5 from './components/Text5'
// import Text6 from './components/Text6'

const Text4 = React.lazy(()=>import('./components/day1/Text4'))
const Text5 = lazy(()=>import('./components/day1/Text5'))
const Text6 = lazy(()=>import('./components/day1/Text6'))
const IndexDay2 = lazy(()=>import('./components/day2/index'))


const Layout = () => (
  <div className="Layout">

    <Suspense fallback={<div>Loading...</div>}>
      <IndexDay2/>
    </Suspense>
    <hr/>
    <Button type="primary">Button</Button>
    <Home className='warn'/>
    <Text dataQ='qaq'/>
    <Text2 dataQ='qaq2'/>
    <Text3 />
    <> <Text4/></>
    <Text5/>
    <hr/>
    <Suspense fallback={<div>Loading...</div>}>
      <Text6/>
    </Suspense>
 
  </div>
);

export default Layout;