import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar'
// import RentShieldLanding from '../components/RentshieldLandingPage';

function CustomeRoutes() {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<Navbar/>}/> */}
            <Route path='/' element={<RentShieldLanding/>}/>
        </Routes>
    </div>
  )
}

export default CustomeRoutes