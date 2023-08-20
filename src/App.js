import React from "react";
import { Container } from "react-bootstrap";
import { UserAuthContextProvider } from "./component/Context/UserAuthContext";
import Navbar from "./Navbar/Navbar";
import ProtectedRoute from "./component/login-logout-fun/ProtectedRoute/ProtectedRoute";
import Login from "./component/login-logout-fun/Login/Login";
import Signup from "./component/login-logout-fun/Signup/Signup";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container
      style={{
        width: "100vw",
        margin: "0px",
        padding: "0px",
      }}
    >
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/navbar"
            element={
              <ProtectedRoute>
                <Navbar />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </Container>
  );
};

export default App;
