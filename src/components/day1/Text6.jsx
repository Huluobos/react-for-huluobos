import React from "react";
// 组合children 写法，类似于vue的插槽

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      left:<div>{props.left}</div> 
      right:<div>{props.right}</div> 
    </div>
  );
}

class Text6 extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    
    return (
      <FancyBorder color="blue" left={ <h1 className="Dialog-title">
      Welcome
    </h1>} right={ <p className="Dialog-message">
    Thank you for visiting our spacecraft!
  </p>}/>
       
    );
  }
}
export default Text6