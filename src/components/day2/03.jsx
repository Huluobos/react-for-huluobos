import React from "react";

const  num=0
// PureComponent  改变state 中的值可以
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }
  render() {
    return (
      <>
      <button
      color={this.props.color}
      onClick={() => this.setState(state => ({num: num + 1}))}>
      num: {num}
    </button>
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
      </>
    
    );
  }
}
export default CounterButton