import React from "react";
import AddCard from "./Component/AddCard";
import Login from "./Component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/addcard" component={AddCard} />
      </Router>
    </div>
  );
}

export default App;
