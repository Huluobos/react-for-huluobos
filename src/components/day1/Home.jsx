// class 组件
import React from "react";

import './Home.css';
import Home2 from "./Home2";
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // navDataId: '888'
    }
  }

  render(){
    // const Elementa = <DomFun name="Sara" />;
    return <div className="text-color">Huluobos{this.props.className}<Home2 name='王二' age={31}/> <Home2 name='张' age={31}/></div>
  }
}

export default Home;