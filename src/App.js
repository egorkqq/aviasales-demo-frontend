import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import "flexboxgrid2";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Home/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route render={() => <h2>404 Page not found</h2>} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
