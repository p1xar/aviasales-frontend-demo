import React from "react";
import "./App.css";
import "normalize.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Search from "./Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
