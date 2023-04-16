import React, { useState } from "react";
// import "../styles/App.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./component/SidebarComponent/Sidebar";

const App = () => {
  const [results, setResults] = useState([]);
  return (
    // <div id="main">
    // </div>
    <>
      <div>
        <Navbar setResults={setResults} />
      </div>
      <Sidebar />
    </>
  );
};

export default App;
