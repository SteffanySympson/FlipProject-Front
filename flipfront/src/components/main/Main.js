import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './Main.css';
import Header from '../shared/header/header';
import Footer from '../shared/footer/Footer';
import Home from '../pages/home/Home';
import Exemplo from '../filtroquarto';



const Main = () =>{
  return (
    <div className="background">
      <Header />
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/FiltroQuarto" element={<Exemplo/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main;