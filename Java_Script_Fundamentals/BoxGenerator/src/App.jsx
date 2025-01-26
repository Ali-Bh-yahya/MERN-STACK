import { useState } from 'react'
// import BoxGenrator from './Components/BoxGenerator'
import Form from './Components/Form'
import BoxGenrator2 from './Components/BoxGenrator2'


function App() {
  const [color , setColor] = useState('')
  
  const ChangeColor =(color)=>{
    console.log(color)
    setColor(color);
  }


  return (
    <>
    <Form setData = {ChangeColor}/>
    <BoxGenrator2 data = {color} />
    </>
  )
}

export default App
