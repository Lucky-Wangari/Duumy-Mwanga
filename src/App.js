import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import Details from './components/details/Details';

function App() {
  return (
     <div>
      <Navbar />
      <Home />
      <Details />
      <About />
      <Products />
      <Team />
      <Footer />
     </div>
  );
}

export default App;
