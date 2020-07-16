import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Rank from './pages/Rank';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/game" component={Game} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
