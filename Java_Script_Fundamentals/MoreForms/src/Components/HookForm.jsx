import React, { useState } from 'react';

const HookForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstVaildet, setFirstValidet] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastVaildet, setLastValidet] = useState("");

  const [email, setEmail] = useState("");
  const [emailVaildet, setEmailValidet] = useState("");

  const [password, setPassword] = useState("");
  const [passwordVaildet, setPasswordValidet] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVaildet, setConfirmPasswordValidet] = useState("");

  const Submitfun = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstValidet("");
    } else if (e.target.value.length < 2) {
      setFirstValidet("First Name must be 2 characters or longer!");
    } else {
      setFirstValidet("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastValidet("");
    } else if (e.target.value.length < 2) {
      setLastValidet("Last name must be at least 2 characters");
    } else {
      setLastValidet("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailValidet("");
    } else if (e.target.value.length < 5 || !e.target.value.includes("@")) {
      setEmailValidet("Invalid email address");
    } else {
      setEmailValidet("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordValidet("");
    } else if (e.target.value.length < 8) {
      setPasswordValidet("Password must be at least 8 characters long");
    } else {
      setPasswordValidet("");
    }
  };

  const handleConfirmpassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordValidet("Passwords do not match");
    } else {
      setConfirmPasswordValidet("");
    }
  };

  return (
    <>
      <form onSubmit={Submitfun}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          name="firstname"
          onChange={handleFirstName}
          value={firstName}
        />
        {firstVaildet && <p>{firstVaildet}</p>}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleLastName}
          value={lastName}
        />
        {lastVaildet && <p>{lastVaildet}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          value={email}
        />
        {emailVaildet && <p>{emailVaildet}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handlePassword}
          value={password}
        />
        {passwordVaildet && <p>{passwordVaildet}</p>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleConfirmpassword}
          value={confirmPassword}
        />
        {confirmPasswordVaildet && <p>{confirmPasswordVaildet}</p>}

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Your form data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </>
  );
};

export default HookForm;
