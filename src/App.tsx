import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeParse } from "@parse/react";
import { Login } from "./Login";
import { Home } from "./Home";
const { REACT_APP_PARSE_APPLICATION_ID, REACT_APP_PARSE_LIVE_QUERY_URL, REACT_APP_PARSE_JAVASCRIPT_KEY } = process.env

// Your Parse initialization configuration goes here
const PARSE_LIVE_QUERY_URL: string = (REACT_APP_PARSE_LIVE_QUERY_URL as string);
const PARSE_APPLICATION_ID: string = (REACT_APP_PARSE_APPLICATION_ID as string);
const PARSE_JAVASCRIPT_KEY: string = (REACT_APP_PARSE_JAVASCRIPT_KEY as string);
// Initialize parse using @parse/react instead of regular parse JS SDK
initializeParse(
  PARSE_LIVE_QUERY_URL,
  PARSE_APPLICATION_ID,
  PARSE_JAVASCRIPT_KEY
);

function App() {
  return (
    // This app has two different screens, so we use react-router-dom
    // to manage basic routing
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
