import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
