import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoaderWrapper from "./../components/Loader";
import Dashboard from "./Dashboard";

const Home = lazy(() => import("./Homepage"));
const CreateProfile = lazy(() => import("./CreateProfile"));
const Login = lazy(() => import("./Login"));
const BusinessOnBoarding = lazy(() => import("./BusinessOnboarding"));
const BusinessPreferances = lazy(() => import("./BusinessPreferances"));
const AboutUs = lazy(() => import("./AboutUs"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoaderWrapper />}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/business-onboarding" element={<BusinessOnBoarding />} />
          <Route path="/business-preferances" element={<BusinessPreferances />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
