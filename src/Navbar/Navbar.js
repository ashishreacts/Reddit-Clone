import React, { useState } from "react";
import "./Navbar.css";
import MyModal from "./ShowModal";

const Navbar = ({ setResults }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <span>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
              alt="reddit"
            />
          </span>
        </div>

        <div className="search-bar">
          <span>
            <div className="input-wrapper">
              <div className="search-icon">
                <i className="bi-search"></i>
                <br />
              </div>
              <input type="text" placeholder="Search Reddit" />
            </div>
          </span>
        </div>
        <button type="button" className="btn btn-light">
          <i className="bi-qr-code-scan">
            <span className="get">Get App</span>{" "}
          </i>
        </button>

        {user == null ? (
          <button
            type="buttton"
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Log In
          </button>
        ) : (
          <div id="userInfo">
            <div id="username">{user}</div>
            <button
              type="buttton"
              className="logout"
              onClick={() => setUser(null)}
            >
              Log Out
            </button>
          </div>
        )}

        {/* MODAL */}
        {showModal && <MyModal setUser={setUser} closeModal={closeModal} />}
      </nav>
    </>
  );
};

export default Navbar;
