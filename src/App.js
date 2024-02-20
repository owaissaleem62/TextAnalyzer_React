import './App.css';
// import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import React, {useState } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>



<Navbar home="Home" title="Os_Tech" />
{/* <Alerts/> */}

	<Routes>
		<Route path='/about' element={<About/>}/>
   <Route path='/' element={<TextForm heading="Enter the text to analyze below"/>}/> 
	</Routes>

   </>
  );
}

export default App;
