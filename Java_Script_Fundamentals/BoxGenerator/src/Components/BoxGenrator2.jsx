import React,{useState} from 'react'

const BoxGenrator2 = (props) => {
  const {data} = props;
  // const {color,setColor} = useState;

  return (
    <div>
       <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        x
            
                <div
                    
                >
                    {data}
                </div> 
        </div>
    
      
    </div>
  )
}

export default BoxGenrator2
