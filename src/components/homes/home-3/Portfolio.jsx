import { portfolios3 } from "../../../data/portfolio";
import React from "react";

import { Link } from "react-router-dom";
export default function Portfolio() {
  return (
    <div>
      {/* Portfolio Item */}
      {portfolios3.map((elm, i) => (
        <React.Fragment key={i}>
          {!(i % 2) ? (
            <div
              className="portfolio-1-item row mb-80 mb-sm-50 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-md-5 mb-sm-30">
                <div className="portfolio-1-image">
                  <Link to={`/brutalist-portfolio-single/${elm.id}`}>
                    <img
                      src={elm.imgSrc}
                      loading="lazy"
                      width={elm.imgWidth}
                      height={elm.imgHeight}
                      alt="Image Description"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div>
                  <h3 className="portfolio-1-title font-alt mb-20">
                    <Link to={`/brutalist-portfolio-single/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <div className="ps-md-2 ps-lg-4">
                    <div className="row">
                      <div className="col-md-10 col-lg-8 col-xl-7">
                        <p className="portfolio-1-descr">{elm.description}</p>
                      </div>
                    </div>
                    <div>
                      <Link
                        to={`/brutalist-portfolio-single/${elm.id}`}
                        className="link-hover-anim link-circle align-middle"
                        data-link-animate="y"
                      >
                    
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="portfolio-1-item row mb-80 mb-sm-50 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h3 className="portfolio-1-title font-alt mb-20 ms-0">
                    <Link to={`/brutalist-portfolio-single/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <div className="row">
                    <div className="col-md-11 col-lg-9 col-xl-8">
                      <p className="portfolio-1-descr">{elm.description}</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/brutalist-portfolio-single/${elm.id}`}
                      className="link-hover-anim link-circle align-middle"
                      data-link-animate="y"
                    >
                    
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-first order-md-last mb-sm-30">
                <div className="portfolio-1-image">
                  <Link to={`/brutalist-portfolio-single/${elm.id}`}>
                    <img
                      src={elm.imgSrc}
                      loading="lazy"
                      width={elm.imgWidth}
                      height={elm.imgHeight}
                      alt="Image Description"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {/* End Portfolio Item */}
      {/* Portfolio Item */}

      {/* End Portfolio Item */}
    </div>
  );
}
