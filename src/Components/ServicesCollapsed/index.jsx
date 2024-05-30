
import React, {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BusinessWritingCards } from "../Cards/BusinessWritingCards";
import { AcademicWritingCards } from "../Cards/AcademicWritingCards";
import { ContentWritingCards } from "../Cards/ContentWritingCards";

export const ServicesCollapsed = () => {

  useEffect(() => {

    const collapseButtons = document.querySelectorAll(
      '[data-bs-toggle="collapse"]'
    );
    collapseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-bs-target");
        const collapsibles = document.querySelectorAll(".collapse");
        collapsibles.forEach((collapse) => {
          if (collapse.id !== target.slice(1)) {
            collapse.classList.remove("show");
          }
        });
      });
    });
  },[])
    return (
        <>
  {/*collapses services starts */}
  <div className="container-services mt-5 text-center" data-aos="zoom-out">
    <h2>Our Services</h2>
    <button
      className="px-2 px-md-4 py-2 rounded-5"
      data-bs-toggle="collapse"
      data-bs-target="#demo"
      data-aos="zoom-out"
    >
      Business Writing
    </button>
    <button
      className="px-2 px-md-4 py-2 rounded-5"
      data-bs-toggle="collapse"
      data-bs-target="#demo1"
      data-aos="zoom-out"
    >
      Academic Writing
    </button>
    <button
      className="px-2 px-md-4 py-2 rounded-5"
      data-bs-toggle="collapse"
      data-bs-target="#demo2"
      data-aos="zoom-out"
    >
      Content Writing
    </button>
    <div id="demo" className="collapse mt-4 p-5">
   <BusinessWritingCards />
    </div>
    <div id="demo1" className="collapse mt-4 p-5">
    <AcademicWritingCards />
    </div>
    <div id="demo2" className="collapse mt-4 p-5">
     <ContentWritingCards />
    </div>
  </div>


        </>
    )
}