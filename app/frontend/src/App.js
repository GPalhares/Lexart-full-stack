import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../src/index';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

export default App;
