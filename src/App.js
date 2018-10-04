import React, { Component } from 'react';
import {BrowserRouter,Switch,Route}  from 'react-router-dom';
import './App.css';
import LoginComponent from './components/login/login'
import DashboardComponent from './components/dashboard/dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/dashboard" exact component={DashboardComponent} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
