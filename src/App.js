import './App.css';
import React from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import CartPage from './Components/CartPage';
import MenCategory from './Components/MenCategory';
import WomenCategory from './Components/WomenCategory';
import SingleProductPage from './Components/SingleProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/Cart" element={<CartPage />} /> {/* Cart Page Route */}
          <Route path='/men' element={<MenCategory/>}/>
          <Route path='/women' element={<WomenCategory/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
