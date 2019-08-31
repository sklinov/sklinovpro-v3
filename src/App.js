import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import First from './components/First';
import About from './components/About';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <About />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
