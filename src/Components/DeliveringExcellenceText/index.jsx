import AOSInitializer from "../../AOSInitializer";

export const DeliveringExcellence = () => {
  return (
    <>
        {/* delivery section */}
        <div className="container-delivery container-services overflow-hidden">
          <div className="row p-5">
            <div className="col-lg-6" data-aos="zoom-out">
              <p>Reliable</p>
              <h1>Delivering Excellence with</h1>
              <h1>Timely Delivery</h1>
            </div>
            <div className="col-lg-6" data-aos="zoom-out">
              <p>
                At our company, we understand the importance of timely delivery.
                We strive to provide our clients with high-quality customer
                service that is delivered on time. We have years of experience
                which you can trust us to meet your deadlines and ensure that
                you receive your work when you need it. We take pride in our
                ability to deliver academic excellence with a punctuality
                commitment to every client.
              </p>
              <div className="section-buttons">
                <button className="px-3 py-2 btn btn-outline-dark border-2 btn btn-outline-dark border-2">
                  Learn More
                </button>
                <a href="/signup">Sign Up &gt;</a>
              </div>
            </div>
            <div className="image-section" style={{ height: 450 }} data-aos="zoom-out">
              <img
                src="/images/delivery.jpg"
                alt=""
                width="auto"
                className="mt-5"
              />
            </div>
          </div>
        </div>
      </>
  )
};
