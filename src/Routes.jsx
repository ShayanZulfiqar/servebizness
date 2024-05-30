import React from "react";

import { BrowserRouter as Router,Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BusinessWriting } from "./Pages/Business_Writing_All/BusinessWriting";
import { ContentWriting } from "./Pages/Content_Writing_All/ContentWriting";
import {ContactUs} from "./Pages/ContactUs"
import {About} from "./Pages/About"
import { ClassofServe } from "./Pages/ClassServe";
import { HowItWorks } from "./Pages/HowItWorks";
import { HonorCode } from "./Pages/HonorCode";
import { Blogs } from "./Pages/Blogs";
import { AcademicWriting } from "./Pages/Academic_Writing_All/AcademicWriting";
import { FAQS } from "./Pages/FAQS";
import { SignIn } from "./Pages/Account/SignIn";
import { SignUp } from "./Pages/Account/SignUp";
import { BusinessServices1 } from "./Pages/Business_Writing_All/BusinessServices1";
import { Error } from "./Pages/Error";
import { BusinessServices2 } from "./Pages/Business_Writing_All/BusinessServices2";
import { ContentServices1 } from "./Pages/Content_Writing_All/ContentServices1";
import { ContentServices2 } from "./Pages/Content_Writing_All/ContentServices2";
import { AcademicServices1 } from "./Pages/Academic_Writing_All/AcademicServices1";
import { Sample } from "./Pages/Sample";
import { LandingPage } from "./Pages/LandingPage";
import { ParallaxProvider } from 'react-scroll-parallax';


const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter fallback={<>Loading...</>}>
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="Home" element={<Home />} />
            <Route path="Business_writing" element={<BusinessWriting />} />
            <Route path="Business_Services" element={<BusinessServices1 />} />
            <Route path="Business_sub_Services" element={<BusinessServices2 />} />
            <Route path="ContentWriting" element={<ContentWriting />} />
            <Route path="Content_Services" element={<ContentServices1 />} />
            <Route path="Content_sub_Services" element={<ContentServices2 />} />
            <Route path="AcademicWriting" element={<AcademicWriting />} />
            <Route path="Academic_Services" element={<AcademicServices1 />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="About" element={<About />} />
            <Route path="ClassOfServe" element={<ClassofServe />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="HonorCode" element={<HonorCode />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Faq's" element={<FAQS />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="*" element={<Error />} />
            <Route path="Sample" element={<Sample />} />
          </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
};

export default ProjectRoutes;
