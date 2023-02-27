
import React from "react";

class Home2 extends React.Component{
  constructor(props){
    
    super(props)
    this.state = {
      sex:'女'
    }
  }
  render(){
    const age2 = this.props.age +4
    return <h2>姓名：{this.props.name},年龄：{age2}, 性别：{this.state.sex},</h2>
  }
}

export default Home2;