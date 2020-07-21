import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/game" component={Game} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/" component={Login} />
    </Switch>
  );
}
