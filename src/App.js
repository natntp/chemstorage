import React, { Component } from 'react';
import Monitor from "./Component/Monitor";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Component/Login';
import regis from "./Component/Regis";

class App extends Component {

    renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Monitor} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Regis" component={regis} />
      </Switch>
    )
  }

  render(){
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}  
export default App;
