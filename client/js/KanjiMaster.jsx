import React, { Component } from 'react';

class KanjiMaster extends Component {
  state = {
    message: 'hello'
  };
  updateMessage = () => {
    this.setState({ message: 'bye' });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>update</button>
      </div>
    );
  }
}

export default KanjiMaster;
