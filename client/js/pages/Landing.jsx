import React from 'react';
import { StateContext } from '../StateProvider';

const Landing = () => (
  <div>
    Landing
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

export default Landing;
