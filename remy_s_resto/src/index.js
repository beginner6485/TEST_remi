import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Pages/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Traiteur from './Pages/Traiteur'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/#menu_section" element={<Welcome/>} />
        <Route path="/Traiteur" element={<Traiteur />}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
