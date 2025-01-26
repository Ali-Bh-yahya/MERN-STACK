import React, { useState } from 'react';
import HomePage from './Components/Home';
import NumberRoute from './Components/Page1';
import './App.css';
import { Link,Routes,Route} from "react-router-dom";
import WordRoute from './Components/WordRoute';

function App() {
  

  return (
    <>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/:num" element = {<NumberRoute/>}/>
      <Route path = "/:word" element = {<WordRoute/>}/>
      <Route path = "/:word/:color1/:color2" element = {<WordRoute/>}/>
      <Route path = "/:word/:color1" element = {<WordRoute/>}/>
    </Routes>
    </>
  );
}

export default App;
