import React from "react";
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={props.onClick}>
      {props.children}
    </button>
  ));

  function clickFun(e,ref){
    // console.log(e);
    // console.log(ref);
  }
  
function DomD(props){
    const ref = React.createRef();
    // console.log('ref: ', ref);
    return (<FancyButton ref={ref} onClick={(e)=>clickFun(e,ref)} {...props.props}>Click me!</FancyButton>)
}




const DomWChild = React.forwardRef((props, ref)=>(
     <button  {...props} ref={ref}> {props.children}</button >
))

const ref = React.createRef()

class DomW extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    clickFun(){
        // console.log("DomW.click");
    }
    render(){
        return (<DomWChild className={'DomW'} onClick={this.clickFun} ref={ref}>父级向下透传</DomWChild>)
    }
}

export default DomW