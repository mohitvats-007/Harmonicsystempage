import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from '../component/navbar/Navrbar';
import Footer from '../component/footer/Footer';
import Home from '../component/home/Home';
import Blog from '../component/pojects/Blog';

function App() {

  return (
    <>
      <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path="/"                               element={<Home/>}/>
    <Route path="/home"                               element={<Home/>}/>
   
    <Route path="blog"                               element={<Blog/>}/>
      </Routes>    
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
