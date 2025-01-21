import React, { useState , useEffect } from  'react';



const HookForm = ()=> {

    const [firstName  , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
  
 
    return(
      <>
        <form>
           <label htmlFor="firstname">First Name:</label>
           <input type = "text" name = "firstname" onChange = {(e) => setFirstName(e.target.value)} value={firstName}/>
            <label htmlFor="lastname">Last Name:</label>
            <input type = "text" name = "lastname" onChange = {(e) => setLastName(e.target.value)} value={lastName}/>
            <label htmlFor="email">Email:</label>
            <input type = "email" name = "email" onChange = {(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password">Password:</label>
            <input type = "password" name = "password" onChange = {(e) => setPassword(e.target.value)} value={password}/>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type = "password" name = "confirmPassword" value={confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}/>
        </form>

        <div>
                <h2 >Your form data</h2>
                
                <p>First Name: {firstName}</p>
                
                <p>Last Name: {lastName}</p>
                
                <p>Email: {email}</p>
                
                <p>Password: {password}</p>
                
                <p>Confirm Password: {confirmPassword}</p>

          </div>
      
      
      </>
    )

  

}
export default HookForm;