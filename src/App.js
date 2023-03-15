import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import { Route, Routes } from 'react-router-dom';
import PartnerWithUs from './screens/PartnerWithUs';

function App() {
  return (
       
  <Routes>
  <Route path='/' element={<HomeScreen />}/>
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
  <Route path='/PartnerWithUs' element={<PartnerWithUs/>}/>

</Routes>
  );
}

export default App;
