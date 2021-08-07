import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router } from "react-router-dom"
import AppRouter from './routers/AppRouter'
import Navigation from './components/Navigation'

function App() {
  return (
          <>
          <div>
            <Router>
                  <Navigation/>
                  <AppRouter/>
            </Router> 
          </div>
          </>
  );
}

export default App;
