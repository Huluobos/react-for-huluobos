import React from "react";
// props 传值时，不能用key传值，key这个字段被定义成独立字段，传值会失败


const TypeContext =React.createContext('light') 
function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) =>
  //   <li key={number.toString()}>
  //     {number}
  //   </li>
  // );
  return (
    <TypeContext.Provider value="TypeContextValue">
      <ul>{numbers.map((each,inds)=>
        <li key={inds+'s'} name={inds+'2'}>{each}</li> 
      )}</ul>
    </TypeContext.Provider>
    
  );
}
const numbers = [1, 2, 3, 4, 5];

class Text3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        num:1,
        isLoggedIn:true
      }
    }

    render() {
       
        return  <NumberList numbers={numbers} context={this.context} />

    }
}
  
  export default Text3;