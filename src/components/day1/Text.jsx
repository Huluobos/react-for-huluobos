import React from "react";
class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        num:1
      }
      this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.timerID = setInterval(
            ()=>{
                this.setState((state,props)=>({
                    num:state.num +1,
                    date:new Date()
                }))
            },
            1000
          );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    handleClick = (e,str)=>{
        // console.log(str);
        console.log(e);
        // e.preventDefault();
        console.log(this);
        console.log('11111111111');
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>{this.state.date.toLocaleTimeString()} / {this.state.num}</h2>


          <button onClick={(e)=>this.handleClick(e,'3333333')}>
             Lasers
          </button>
          <button onClick={this.handleClick.bind(this,'333333333')}>
          Activate
        </button>

        </div>
        
       
      );
    }
  }
  
  export default Text;