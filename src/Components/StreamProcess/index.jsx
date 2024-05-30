import AOSInitializer from "../../AOSInitializer";

export const StreamProcess = () => {
  return (
    <>
      <>
        {/* streamlind process */}
        <div className="container-process text-center overflow-hidden container-services mb-5">
          <div className="text-heading p-4" data-aos="zoom-out">
            <h1>Streamlined process for writing</h1>
            <h1>projects Delivery</h1>
            <p className="">
              Our process is designed to make it easy for students to order and
              receive their academic
            </p>
            <p>
              documents. From placing an order to receiving the final document,
              we ensure a smooth and
            </p>
            <p>efficient experience.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 p-3 text-start" data-aos="zoom-out">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-1 fs-3 text-dark">
                  <i className="fa-solid fa-cube" />
                </div>
                <div className="col-lg-9 mt-0 ms-2 text-start">
                  <h4>Place your order</h4>
                  <p>
                    Share your assignment details for your academic papers.
                    Order
                  </p>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-1 fs-3 text-dark">
                  <i className="fa-solid fa-cube" />
                </div>
                <div className="col-lg-9 mt-0 ms-2 text-start">
                  <h4>Writer assignment</h4>
                  <p>
                    Your set of instructions will be assigned to the most
                    suitable writer.
                  </p>
                </div>
              </div>
              <div className="row d-flex justify-content-center" data-aos="zoom-out">
                <div className="col-lg-1 fs-3 text-dark" >
                  <i className="fa-solid fa-cube" />
                </div>
                <div className="col-lg-9 mt-0 ms-2">
                  <h4>Quality assurance</h4>
                  <p>
                    Your assignments are checked multiple times for the highest
                    standard of quality before they are sent across.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-out">
              <img
                src="/images/business banner.jpg"
                alt="business banner"
                width="580px"
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>
        <hr />
      </>
    </>
  );
};
