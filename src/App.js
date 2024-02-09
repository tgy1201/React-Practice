import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Main from './component/Main';
import Footer from './component/Footer';
import Detail from './component/Detail';
import { useState } from 'react';



function App() {
  const [products, setProducts] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<Main products={products} setProducts={setProducts} />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
