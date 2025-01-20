import  React , {useState} from 'react';

const PersonalCard = (props) => {
  const {firstname , lastname , age , color} = props;
  const [savedAge , setSavedAge] = useState(age) ;      
  const handleClick = () => {
    setSavedAge(savedAge + 1);
      }
  return (
    <>
    <h1>{firstname} , {lastname}</h1>
    <p>Age: {savedAge}</p>
    <p>Hair colore : {color}</p>
    <div><button onClick = {handleClick}> Click Me</button></div>
    </>
  )
}

export default PersonalCard;