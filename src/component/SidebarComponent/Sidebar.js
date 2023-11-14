import React from "react";
import { Link } from "react-router-dom";
// import Card from "../../Card/Card";
import items from "../SidebarComponent/Data/Sidebar.json";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
export const Sidebar = () => {
  return (
    <>
      {/* <div className="main"> */}
        <div className="sidebar">
          {/* <SidebarItem /> */}

          <div className="feeds">FEEDS</div>
          <div className="sidebar-titled">
            <div className="home">
              <div>
              <Link to={"/navbar"}>

                <i className="bi-house-door"></i>
                Home
              </Link>
              </div>
            </div>
          </div>
          <div className="sidebar-titled">
            <div className="popular">
              <div>
                <i className="bi-arrow-up-right-circle"></i>
                POPULAR
              </div>
            </div>
          </div>

          <span className="topics">TOPICS</span>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
        {/* <div className="card-component">
          <Card />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Sidebar;
