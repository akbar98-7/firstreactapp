
import './App.css';
import react from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

const App = () => {

  return (
    <>

    <Routes>

      <Route exact path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/contact" element={<Contact/>} />


    </Routes>



    { /*<About />
    <Contact /> */}
    </>
  );

};

export default App;


