import AOSInitializer
 from "../../AOSInitializer";

export const GetStarted = () => {
  return (
    <>
      <div className="container-get-started overflow-hidden border-spacing-1 p-5">
        <div className="row d-flex align-items-md-center justify-content-center text-center">
          <div className="col-lg-6" data-aos="zoom-out">
            <h2>Get Started with Us</h2>
            <h2>Today</h2>
            <p>Experience top-quality academic writing services tailored to</p>
            <p>your needs.</p>
            <button className="px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
              Learn More
            </button>
            <a href="login.html">
              <button className="ms-1 px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
                Sign In
              </button>
            </a>
          </div>
          <div className="col-lg-6 object-cover" data-aos="zoom-out">
            <img
              src="/images/notebook-3820634_1280.jpg"
              alt=""
              height="300px"
              width="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
