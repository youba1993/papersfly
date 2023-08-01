import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Singup from '../pages/Signup';
import Contact from '../pages/Contact';
import Users from '../pages/Users/Users';
import UserDetails from '../pages/Users/UserDetails';

import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={ <Singup />} />
      <Route path='/services' element= { <Services />} />
      <Route path='/contact' element={ <Contact />} />

    </Routes>
  )
}

export default Routers