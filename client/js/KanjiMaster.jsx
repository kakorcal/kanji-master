import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Learn from './pages/Learn';
import Profile from './pages/Profile';
import Challenges from './pages/Challenges';
import Challenge from './pages/Challenge';
import FourOhFour from './pages/FourOhFour';

const KanjiMaster = () => (
  <StateProvider>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/learn" component={Learn} />
      <Route path="/profile" component={Profile} />
      <Route path="/challenges" component={Challenges} />
      <Route path="/challenges/:challenge_id" component={Challenge} />
      <Route component={FourOhFour} />
    </Switch>
  </StateProvider>
);

export default KanjiMaster;
