import React from 'react'
import { PropTypes } from 'prop-types';
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {a:null}
  }
  render(){
    return(
      <div>
        <button onClick={this.props.onIncrement}>
          ＋
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          －
        </button>
        <hr />
        <div>
          Clicked: {this.props.value} times
        </div>
      </div>
    )
  }
}

export default Counter
