import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tokenomics } from './components/Tokenomics';
import { Join } from './components/Join';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Tokenomics />
        <Join />
      </main>
    </div>
  );
}

export default App;