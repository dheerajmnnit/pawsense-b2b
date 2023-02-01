import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoaderWrapper from "./../components/Loader";

const Home = lazy(() => import("./Homepage"));
const AboutUs = lazy(() => import("./AboutUs"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoaderWrapper />}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </Router>
        </Suspense>
    );
};

export default AppRoutes;
