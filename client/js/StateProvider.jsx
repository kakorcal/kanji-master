import React, { Component } from 'react';
import PropTypes from 'prop-types';

const StateContext = React.createContext();

class StateProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  state = {
    isLoading: false
  };
  toggleLoad = () => {
    if (this.state.isLoading) {
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
    }
  };
  render() {
    return (
      <StateContext.Provider
        value={{
          state: this.state,
          toggleLoad: this.toggleLoad
        }}
      >
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export { StateProvider, StateContext };
