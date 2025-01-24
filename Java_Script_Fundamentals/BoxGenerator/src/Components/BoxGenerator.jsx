import React, { useState} from  'react';

// Design a React component where users can choose a color through a form. When they submit the form, a new colored box should appear alongside any existing boxes, maintaining a horizontal layout with automatic wrapping if needed. Feel free to use any styling technique you'd like.
const BoxGenrator = ( ) =>{

  const [boxColor, setBoxColor] = useState('');
  const [boxes , setBoxes] = useState([]);
  

  const handleBoxColorChange = (event) => {
    setBoxColor(event.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newBoxes = [...boxes, boxColor]; 
    setBoxes(newBoxes);
    setBoxColor('');
  }

  
  return (
    <>
     <form onSubmit= {handleSubmit}>
      <input type="text" value={boxColor} onChange={handleBoxColorChange}/>
      <input type="submit" value="Add" />
     </form>
     <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {boxes.map((color, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: color,
                        width: '20vh',
                        height: '20vh',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '12px',
                        textAlign: 'center',
                        border: '1px solid #ccc',
                    }}
                >
                    {color}
                </div>
            ))}
        </div>
    </>
    

  )  


  }






export default BoxGenrator;