import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/carteira" exact component={ Wallet } />
      </Switch>
    </div>
  );
}

export default App;
