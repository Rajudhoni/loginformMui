import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import profile from './components/profile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {UserContext} from "./context";
function App() {
  const [userToken,setUserToken]=useState()
  return (
    <UserContext.Provider value={[userToken,setUserToken]}>
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={profile} />
      </Switch>
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
