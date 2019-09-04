import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import First from './components/First/First';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <First />
      <About />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
