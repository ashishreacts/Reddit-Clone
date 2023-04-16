import "./ShowModal.css";
import { cleanup } from "@testing-library/react";
const MyModal = ({ closeModal }) => {
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
        <input className="modal-text" type="text" placeholder="Username" />
        <br />
        <input className="modal-text" type="password" placeholder="Password" />
        <br />
        <button type="buttton" class="modal-btn" onClick={closeModal}>
          Log In
        </button>
      </div>
    </>
  );
};
export default MyModal;
