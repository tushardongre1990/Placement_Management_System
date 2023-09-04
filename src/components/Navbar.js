import React from 'react';
import './Navbar.css';
import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import Login from './Login'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard';
import SignUp from './registerdemo';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <BrowserRouter>
    <nav className="navbar">
      <div className="logo">Placement_Management_System</div>
      <ul className="nav-links">
        <li className="nav-item"><Link to ={"/HomePage"}>Home</Link></li>
        <li className="nav-item"><Link to ={"/RegistrationForm"}>Register</Link></li>
        {/* <li className="nav-item"><Link to ={"/registerdemo"}>Register</Link></li> */}
        <li className="nav-item"><Link to ={"/Login"}>Login</Link></li>
        <li className="nav-item"><Link to ={"/AboutUs"}>About Us</Link></li>
        <li className="nav-item"><Link to ={"/ContactUs"}>Contact Us</Link></li>
      </ul>
    </nav>
    <Routes>
    <Route path="/RegistrationForm" element={<RegistrationForm></RegistrationForm>} />
    {/* <Route path="/registerdemo" element={<SignUp></SignUp>} /> */}
    <Route path="/Homepage" element={<HomePage></HomePage>} />
    <Route path="/" element={<HomePage></HomePage>} />
    <Route path="/Login" element={<Login></Login>} />
    <Route path="/AboutUs" element={<AboutUs></AboutUs>} />
    <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
    <Route path="/Dashboard" element={<Dashboard></Dashboard>} />


        
    </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
