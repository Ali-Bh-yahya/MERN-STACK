import { useState } from 'react';
import PersonalCard from './component/personalCard';
import './App.css'
function App() {
  return (
    <>
      <PersonalCard firstname={"Ali"} lastname={"Yahya"} age={20} color={"black"} />
      <PersonalCard firstname={"Ayman"} lastname={"Yahya"} age={22} color={"red"} />
      <PersonalCard firstname={"Mohamed"} lastname={"Yahya"} age={24} color={"blue"} />
    </>
  );
}

export default App;

