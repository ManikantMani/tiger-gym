import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Service from './pages/Service';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatchPage from './pages/NoMatchPage';  
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <>
     <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/service" element = {<Service />} />
      <Route path = "/offers" element = {<Offers />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/contact" element = {<Contact />} />
      <Route path = "*" element = {<NoMatchPage />} />
      </Routes>   
      <Footer />
    </>
  );
};

export default App;
