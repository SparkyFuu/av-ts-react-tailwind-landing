import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Skills from "../pages/Skills/Skills";
import WorkExperience from "../pages/Work-Experience/WorkExperience";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
        <About />
        <Skills />
        <WorkExperience />
      </Layout>
    </Router>
  );
};

export default AppRoutes;
