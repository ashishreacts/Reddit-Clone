import React, { useState } from "react";
import "./Navbar.css";
import MyModal from "./ShowModal";

const Navbar = ({ setResults }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="https://example.com">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
                alt="reddit"
              />
            </a>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Reddit"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi-qr-code-scan">
                  <span className="get">Get App</span>{" "}
                </i>
              </button>
            </form>
            {/* MODAL */}
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
            {showModal && <MyModal setUser={setUser} closeModal={closeModal} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
