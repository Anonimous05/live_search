import React, {Component} from "react";
import Main from "./Container/Main/Main";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Details from "./Container/Details/Details";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/details/:name" component={Details}/>
          </Switch>
        </div>
    );
  }
}

export default App;
