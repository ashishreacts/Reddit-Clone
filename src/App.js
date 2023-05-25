import React from "react";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./component/SidebarComponent/Sidebar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Sidebar />
    </>
  );
};

export default App;
