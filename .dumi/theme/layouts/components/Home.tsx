import React from 'react';
import Hero from './Hero';
import Platforms from './Platforms';
import Components from './Components';
import Installation from './Installation';
import Footer from './Footer';

function Home() {
  return (
    <div className="app">
      <Hero />
      <Platforms />
      <Components />
      <Installation />
      <Footer />
    </div>
  );
}

export default Home;