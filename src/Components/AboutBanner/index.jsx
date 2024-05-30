import React from "react";
import AOSInitializer from "../../AOSInitializer";
export const AboutBanner = () => {
  return (
    <>
      {/* choice section */}
      <hr />
      <div className="container-choice p-5 mt-3">
        <div className="row">
          <div className="col-lg-6" data-aos="zoom-out">
            <img
              src="/images/services.jpg"
              alt="About Banner"
              width="580px"
              className="object-fit-cover"
            />
          </div>
          <div className="col-lg-6" data-aos="zoom-out">
            <h4>Choose Our Services Today</h4>
            <p>
              Our company offers a wide range of academic writing services,
              including reports, case studies, essays, theses, proposals, and
              more. With our team of experienced writers, we guarantee
              high-quality work delivered on time.
            </p>
            <h4>Expert Writers Available</h4>
            <p>
              At our company, we have a team of expert writers who are
              well-versed in various academic disciplines. They are dedicated to
              providing you with well-researched and professionally written
              papers that meet your requirements.
            </p>
            <h4>Affordable Pricing Options</h4>
            <p>
              We understand that students have budget constraints. That’s why we
              offer affordable pricing options without compromising on the
              quality of our work. Get value for your money with our academic
              writing services.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
