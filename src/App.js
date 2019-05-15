import React from "react";
import Navigation from "./components/navigation";
import Landing from "./pages/landing";
import Error from "./pages/404";
import Search from "./pages/search";
import Result from "./pages/result";
import {Switch, Route} from "react-router-dom";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/result" component={Result} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
