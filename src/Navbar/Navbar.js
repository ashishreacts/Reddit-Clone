import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, faSearch } from "react-icons/fa";
import MyModal from "./ShowModal";

const Navbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

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
              <FaSearch id="search-icon" />
              <input
                type="text"
                placeholder="Search Reddit"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
          </span>
        </div>
        <button type="button" class="btn btn-light">
          <i className="bi-qr-code-scan">
            <span className="get">Get App</span>{" "}
          </i>
        </button>
        <button
          type="buttton"
          class="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Log In
        </button>

        {/* MODAL */}
        {showModal && <MyModal closeModal={closeModal} />}
      </nav>
    </>
  );
};

export default Navbar;
