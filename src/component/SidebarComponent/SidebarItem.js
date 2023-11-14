import "./SidebarItem.css";
import { useState } from "react";
export const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="sidebar-title">
            <span>
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </span>
            <i
              className="bi-chevron-down toggle-btn"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      // <a href={item.path || "#"} className="sidebar-item plain">
      //   {item.icon && <i className={item.icon}></i>}
      //   {item.title}
      // </a>
      <button
        onClick={() => (window.location.href = item.path || "#")}
        className="sidebar-item plain"
      >
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </button>
    );
  }
};

export default SidebarItem;
