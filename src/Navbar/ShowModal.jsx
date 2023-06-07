import React, { useRef, useState } from "react";
import "./ShowModal.css";

const MyModal = ({ closeModal, setUser }) => {
  const username = useRef();
  const password = useRef();

  function handleLogin() {
    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;

    if (enteredUsername && enteredPassword) {
      // Capitalize the first letter of the username
      const capitalizedUsername =
        enteredUsername.charAt(0).toUpperCase() + enteredUsername.slice(1);

      // Set the capitalized username as the logged-in user
      setUser(capitalizedUsername);
    } else {
      alert("Please enter a username and password");
    }

    closeModal();
  }

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2 className="modal-h2">Log In</h2>
        <p className="modal-p">
          By continuing, you agree to set up a Reddit account and abide by our{" "}
          <a href="https://example.com">User Agreement</a> and{" "}
          <a href="https://example.com">Privacy Policy</a>.
        </p>
        <input
          ref={username}
          className="modal-text"
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          ref={password}
          className="modal-text"
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="button" className="modal-btn" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
};

export default MyModal;
