import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Main from './Components/Layout/Main';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
         <Main>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/Login" component ={Login} />
            <Route path="/Register" component ={Register} />
          </Switch>
         </Main>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
