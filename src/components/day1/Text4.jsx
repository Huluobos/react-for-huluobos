import React from "react";


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'cccc',
      textarea: '文章',
      value3: ['lime','coconut'],
    };
  }

  handleChange = (event)=> {
    // this.setState({value: event.target.value});
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  // handleChange2 = (event)=> {
  //   this.setState({value2: event.target.value});
  // }
  handleChange3 = (event)=> {
    console.log(event);
    this.setState({value3: event.target.value});
  }

  handleSubmit = (event)=> {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input name="text" type="text" value={this.state.text} onChange={this.handleChange} />
        </label>
        <label>
        文章:
        <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} />
      </label>
      <label>
      选择你喜欢的风味:
      <select multiple={true} value={this.state.value3} onChange={this.handleChange3}>
        <option value="grapefruit">葡萄柚</option>
        <option value="lime">酸橙</option>
        <option value="coconut">椰子</option>
        <option value="mango">芒果</option>
      </select>
      </label>
        <input name="submit" type="submit" value="提交" />
      </form>
    )
  }
}
export default NameForm