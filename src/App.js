import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes  } from 'react-router-dom';
import HomePage from './components/HomePage';
// import HomePage from './components/HomePage';
// import AppRouter from './AppRouter';
//import Login from './components/Login'
//import RegistrationForm from './components/RegistrationForm'

// import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* Rest of your application */}

      {/* <HomePage /> */}
      {/* <AppRouter /> */}
      
      {/* <RegistrationForm /> */}
   

    </div>
  );
};

export default App;


