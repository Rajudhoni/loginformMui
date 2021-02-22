import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import profile from './components/profile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={profile} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
