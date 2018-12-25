import React from "react";
import Home from "./components/Home";
import "flexboxgrid2";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
