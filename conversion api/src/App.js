import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';
import Saved from './components/Saved';
import Footer from './components/Footer';

// Símbolo: &#8646; ⇆

function App() {
  return (
    <>
      <Header />
      <Converter />
      <Saved />
      <Footer />
    </>
  );
}

export default App;