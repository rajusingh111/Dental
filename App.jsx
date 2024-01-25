
import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'


import Contact from './Components/Contact'
import Errorpage from './Components/Errorpage'
import Home from './Home/Home'
import Brand from './Components/Brand'
import Services from './Components/Services'
import Categories from './Components/Categories'
import Product from './Components/Product'




const App = () => {
 
   
  return (
   
    <Router>
    <Routes>
      <Route  path="/" element={<Home/>}/>
     
    <Route path="/" element={<Brand/>}/>
    <Route path="/categories" element={<Categories/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route  path="/brand" element={<Brand/>}/>
      <Route  path="/services" element={<Services/>}/>
      <Route  path="*" element={<Errorpage/>}/>
    </Routes>
    </Router>
   
    
   
  );
};

export default App