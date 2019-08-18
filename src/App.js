import React from 'react';
import './App.css';
import 'normalize.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Header />
        <Route path='/' exact component={Home} />
      </div>
      </BrowserRouter> 
  );
}

export default App;
