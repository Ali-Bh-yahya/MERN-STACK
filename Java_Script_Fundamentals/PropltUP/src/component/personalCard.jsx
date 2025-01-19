import React from "react";

const PersonalCard = (props) => {
  return (
    <>
    {props.firstname} , {props.lastname}
    <p>Age: {props.age}</p>
    <p>Hair colore : {props.color}</p>
    </>
  )
}

export default PersonalCard;