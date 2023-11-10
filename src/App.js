import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Experience />
    </>
  )
}

export default App