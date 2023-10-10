import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import JobsSearch from "../Pages/JobSearch";
import SignleJob from "../Pages/SignleJob";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsSearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs/:id/" element={<SignleJob />} />
    </Routes>
  );
};

export default AllRoutes;
