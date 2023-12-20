import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Contact } from './components/Contact';
import { About } from './components/About';
import {Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
     <Header />
      <Routes>
        <Route path={"/"} element = {<HeroSection/>}/>
        <Route path={"/About"} element = {<About/>}/>
        <Route path={"/Contact"} element = {<Contact />}/>
      </Routes>  
      <Footer />
     
    </div>
  );
}

export default App;
