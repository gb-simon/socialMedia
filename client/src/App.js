import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Components/Layout/Main';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

class App extends Component {
  render() {
    return(
      <div className="App">
        <BrowserRouter>
         <Main>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/Login" component ={Login} />
            <Route path="/Register" component ={Register} />
          </Switch>
         </Main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
