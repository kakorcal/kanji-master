import React, { Component } from 'react';
import axios from 'axios';

class KanjiMaster extends Component {
  state = {
    message: 'hello'
  };
  updateMessage = () => {
    axios
      .get(`${BASE_API_URL}/api`)
      .then(data => {
        this.setState({ message: JSON.stringify(data) });
      })
      .catch(err => {
        this.setState({ message: JSON.stringify(err) });
      });
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
