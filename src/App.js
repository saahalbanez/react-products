import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (    
    <BrowserRouter>
    <div className="div-container">
      <div className="div-navbar">
        <Nav/>
      </div>
      <div className="div-routes">
        <Routes/>    
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
