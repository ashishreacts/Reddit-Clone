import React from "react";
import "./Navbar.css";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../component/Context/UserAuthContext";
import Sidebar from "../component/SidebarComponent/Sidebar";
const Navbar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
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
                className="nav-form-control me-2"
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

            <div className="nav_username p-4 box mt-3 text-center">
              {user && user.email}
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                onClick={handleLogout}
                style={{ margin: "0px 15px" }}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/*  */}
      <Sidebar />
    </>
  );
};

export default Navbar;
