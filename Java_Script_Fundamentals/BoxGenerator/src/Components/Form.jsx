{/* refce*/}
import React , {useState} from 'react'

const Form = (props) => {
  const [color,setColor] = useState("")
  const {setData} = props;
  

  const handle =(e) =>{
    setColor(e.target.value);
  }

  const handleColor =(e) =>{
    e.preventDefault(); 
    setData(color);
    setColor("")

  }

  return (
    <div>
      <form onSubmit={handleColor}>
        <label htmlFor="">Color</label>
        <input type="text" id="color"  onChange={handle} value={color}/>
        <button type = "submit">submit</button>
      </form>
      
    </div>
  )
}

export default Form
