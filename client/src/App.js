import './App.css';
import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
