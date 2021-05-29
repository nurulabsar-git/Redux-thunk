import React from 'react'
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Component/Header/Header';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
