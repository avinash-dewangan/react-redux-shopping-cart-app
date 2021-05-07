import React from 'react'
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import RouteContainer from './components/RouteContainer';
import Test, { flag } from "./components/Test/Test"
function App() {
  let isTrue = flag;
  return (
    <Router>
      <div className="App">
        {isTrue
          ? (
            <Navbar />,
            <RouteContainer />
          ) : (
            <Test />
          )}
      </div>
    </Router>
  );
}

export default App;
