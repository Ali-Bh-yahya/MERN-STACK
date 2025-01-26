import React from 'react';
import { useParams } from 'react-router-dom';

const NumberRoute = () => {
  const { num } = useParams(); // This will extract the 'num' parameter from the URL
  return (
    <>
      <h1>The number is: {num}</h1>
    </>
  );
};

export default NumberRoute;
