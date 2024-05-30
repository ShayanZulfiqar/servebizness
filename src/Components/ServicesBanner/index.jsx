import React from "react";
import AOSInitializer from "../../AOSInitializer";
export const ServicesBanner = ({subtitle,title,desc,col_1_title,col_1_des,col_2_title,col_2_desc,col_3_desc,col_3_title,className, imgUrl}) => {
  return (
    <div className="container-services p-5">
      <div className="row">
        <div className="col-lg-6" data-aos="zoom-out">
          <p>{subtitle}</p>
          <h1>{title}</h1>
          <p>
            {desc}
          </p>
          <div className="row">
            <div className={className}>
              <h5>{col_1_title}</h5>
              <p>
                {col_1_des}
              </p>
            </div>
            <div className={className}>
              <h5>{col_2_title}</h5>
              <p>
                {col_2_desc}
              </p>
            </div>
            <div className={className} >
              <h5>{col_3_title}</h5>
              <p>
                {col_3_desc}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="zoom-out">
          <img
            src={imgUrl}
           alt="Setvice Banner"
            width="580px"
          />
        </div>
      </div>
    </div>
  );
};
