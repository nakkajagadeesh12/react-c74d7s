import React from 'react';

class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: "hii",
    }
  }
  getTest() {
    this.setState({
      data: "hello"
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.data}</p>
        <button type="button" onClick={this.getTest.bind(this)}>Click</button>
      </div>
    )
  }
}

export default Test;