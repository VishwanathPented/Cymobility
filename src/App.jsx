import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import ProcessFlow from './components/ProcessFlow';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ProcessFlow />
      <Careers />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
