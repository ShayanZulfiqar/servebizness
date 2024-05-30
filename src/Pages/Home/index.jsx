import React, { useState } from 'react';
import { Header } from "../../Components/Header";
import { IntroText } from "../../Components/IntroText";
import { ServicesBanner } from "../../Components/ServicesBanner";
import { AboutBanner } from "../../Components/AboutBanner";
import { DeliveringExcellence } from "../../Components/DeliveringExcellenceText";
import { StreamProcess } from "../../Components/StreamProcess";
import { WritingServices } from "../../Components/WritingServices";
import Testimonials from "../../Components/Testimonials";
import { Calculator } from "../../Components/Calculator";
import { GetStarted } from "../../Components/GetStarted";
import { FAQ } from "../../Components/FAQ";
import { Footer } from "../../Components/Footer";
import { ServicesCollapsed } from "../../Components/ServicesCollapsed";
import { Contact } from "../../Components/Contact";
import AOSInitializer from "../../AOSInitializer";
import ServicesAnimation from "../../services.json"
import Lottie from "lottie-react";

export const Home = () => {
  const [visibleSection, setVisibleSection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);


  const handlePlayIconClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleSection((prevSection) => (prevSection < 10 ? prevSection + 1 : 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <Header />
      <main style={{ position: 'relative' }}>
        <div>
          {visibleSection === 1 && (
            <div id="first-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <IntroText
                subtitle=""
                title="Unlock Our Success with Our Services"
                desc="Get professional help with your writing needs and achieve top result."
              />
              <div className="container-main px-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="container-image overflow-hidden mt-5">
                      <Lottie animationData={ServicesAnimation} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="text-center">Pick the best plan for you</h1>
                    <div className="form-section d-flex align-items-center justify-content-center mt-4">
                      <Calculator />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {visibleSection === 2 && (
            <div id="second-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <ServicesBanner
                subtitle="Reliable"
                title="Services for different niches"
                desc="We offer a wide range of writing services including business writing, content writing, and academic writing. Our team of expert writers is dedicated to delivering high-quality work that meets your business needs."
                col_1_title="Business Writing"
                col_1_des="Get professionally written essays tailored to your specific requirements."
                col_2_title="Content Writing"
                col_2_desc="Get professionally written essays tailored to your specific requirements."
                col_3_title="Academic Writing"
                col_3_desc="Access meticulously researched and thorough reports tailored to bolster your academic pursuits"
                className="col-lg-4"
                imgUrl="/images/computer-1343393_1280.jpg"
              />
            </div>
          )}
          {visibleSection === 3 && (
            <div id="third-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <AboutBanner />
            </div>
          )}
          {visibleSection === 4 && (
            <div id="fourth-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <DeliveringExcellence />
            </div>
          )}
          {visibleSection === 5 && (
            <div id="fifth-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <StreamProcess />
            </div>
          )}
          {visibleSection === 6 && (
            <div id="sixth-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <Testimonials />
            </div>
          )}
          {visibleSection === 7 && (
            <div id="seventh-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <ServicesCollapsed />
              <GetStarted />
              <div className="project-showcase overflow-hidden">
                <div className="row p-5">
                  <div className="col-lg-4">
                    <div className="card">
                      <img className="card-img-top" src="/images/02.jpg" alt="Card cap" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <img className="card-img-top" src="/images/01.jpg" alt="Card cap" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <img className="card-img-top" src="/images/03.jpg" alt="Card cap" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {visibleSection === 8 && (
            <div id="eighth-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <FAQ />
            </div>
          )}
          {visibleSection === 9 && (
            <div id="ninth-div"  data-aos="zoom-out"className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <Contact />
            </div>
          )}
          {visibleSection === 10 && (
            <div id="tenth-div" data-aos="zoom-out" className={`zoom-div ${isAnimating ? 'drop-in' : ''}`}>
              <Footer />
            </div>
          )}
        </div>
        <div className="play-icon-container" onClick={handlePlayIconClick}>
          <img 
            src="/images/play-icon.png" 
            data-aos="zoom-in"
            className={`play-icon ${isAnimating ? 'drop-in' : ''}`} 
            alt="Play Icon" 
          />
        </div>
      </main>
    </>
  );
};
