import React from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import PrivateRoutes2 from "./utils/PrivateRoute2";
import CodeEditior from "./Pages/Code editior/CodeEditior";

const Navbar = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes2 />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/codeeditior" element={<CodeEditior />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;
