import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import JobsSearch from "../Pages/JobSearch";
import SingleJob from "../Pages/SingleJob";
import PrivateRoute from "./PrivateRoute";
import ViewApplication from "../Pages/JobApplication";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsSearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs/:id/" element={<SingleJob />} />
      <Route
        path={"/application"}
        element={
          <PrivateRoute>
            <ViewApplication />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
