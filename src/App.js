import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import CreateAccount from './pages/createaccount';
import Deposit from './pages/deposit';
import AllData from './pages/alldata';
import Withdraw from './pages/withdraw';
import SuccessCreate from "./pages/successcreate";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/alldata" component={AllData} />
        <Route path="/successcreate" component={SuccessCreate} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
