import React , {useState} from 'react';
import { useParams } from 'react-router-dom';

const WordRoute = () => {
  const {word , color1 , color2} = useParams();

  return (
    <div style={{backgroundColor : color1}}>
      <h1 style={{color : color2}} >You are viewing the word: {word}</h1>
    </div>
  );
}

export default WordRoute;



