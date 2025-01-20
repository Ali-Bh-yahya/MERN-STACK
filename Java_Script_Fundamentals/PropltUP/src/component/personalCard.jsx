import React from "react";

const PersonalCard = (props) => {
  const {firstname , lastname , age , color} = props;
  return (
    <>
    <h1>{firstname} , {lastname}</h1>
    <p>Age: {age}</p>
    <p>Hair colore : {color}</p>
    </>
  )
}

export default PersonalCard;