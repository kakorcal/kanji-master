import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { StateContext } from '../StateProvider';

const TestComponent = () => (
  <div>
    <h1>Test Component</h1>
    <div className="douty" />
    <FontAwesomeIcon icon="user" />

    <StateContext.Consumer>
      {context => (
        <React.Fragment>
          <p>{context.state.isLoading ? 'true' : 'false'}</p>
          <button onClick={context.toggleLoad}>
            <span role="img" aria-label="EMOJI" aria-labelledBy="EMOJI">
              🍰🍥🎂
            </span>
          </button>
        </React.Fragment>
      )}
    </StateContext.Consumer>
  </div>
);

export default TestComponent;
