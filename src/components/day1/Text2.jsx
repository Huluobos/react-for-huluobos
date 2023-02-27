import React from "react";

function LoginButton(props) {
  // console.log('props: ', props);
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  // console.log('props: ', props);
  return (
    <button onClick={props.onClick}>
      Logout....
    </button>
  );
}
function clickFun(e){
  console.log(e);
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const unreadMessages = '22222'
  if (isLoggedIn) {
    return <div> {unreadMessages} ???? {unreadMessages.length > 4 ? <LoginButton onClick={clickFun}/> : 'qqqqqqqqqq' } </div>
  }
  return <LogoutButton />;
}


class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        num:1,
        isLoggedIn:true
      }
    }
    render() {
      
        return <Greeting isLoggedIn={this.state.isLoggedIn}/>
        
        // 
    }
}
  
  export default Text;