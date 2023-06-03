import { useRef } from "react";
import "./ShowModal.css";
// import { cleanup } from "@testing-library/react";
const MyModal = ({ closeModal, setUser }) => {
  const username = useRef();
  const password = useRef();
  function handleLogin() {
    if (
      username.current.value === "ashish" &&
      password.current.value === "123"
    ) {
      setUser("Ashish");
    }

    closeModal();
  }
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2 className="modal-h2">Log In</h2>
        <p className="modal-p">
          By continuing, you agree are setting up a Reddit account and agree to
          our <a href="#">User Agreement</a> and <a href="#">Privacy Policy</a>{" "}
          Privacy Policy.
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
        <button type="buttton" class="modal-btn" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
};
export default MyModal;
