import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import ContactDark from "./ContactDark";

import { qualities } from "../../../data/features";
import sectionImage from "../../../assets/images/demo-brutalist/section-image-1.png";
import sectionBg2 from "../../../assets/images/demo-brutalist/section-bg-2.jpg";
import sectionBg3 from "../../../assets/images/demo-brutalist/section-bg-3.jpg";
import shape1 from "../../../assets/images/demo-brutalist/shape-1.svg"


import AnimatedText from "../../../components/common/AnimatedText";
export default function Home3({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection pt-0 pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row page-section relative z-index-1">
            <div className="col-sm-9">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="About Zeeza" />
                </span>
              </h2>
              <p
                className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
               Zeeza Global helps businesses grow with custom websites and mobile apps designed to meet their unique needs. We focus on creating user-friendly, high-quality solutions that work smoothly and look great.

With free demos, flexible pricing, and a satisfaction guarantee, we make it easy for businesses to bring their ideas to life. Whether you're just starting out or already established, we’re here to help you succeed with reliable and innovative solutions. Let’s create something amazing together!
              </p>
              <ul
                className="section-features font-alt clearlist uppercase wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {qualities.map((quality, index) => (
                  <li key={index}>{quality}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Image */}
          <div
            className="row section-image-1-wrap"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.3"
          >
            <div className="col-5 offset-7 col-sm-4 offset-sm-8">
              <img
               src={sectionImage}
                width={689}
                height={855}
                className="section-image-1"
                alt="Image Description"
              />
            </div>
          </div>
          {/* End Image */}
        </div>
      </section>
      <section
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content bg-scroll pb-0 z-index-1"
        style={{
          backgroundImage: `url(${sectionBg2})`,
        }}
      >
        <Banner />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative pt-100 pt-md-70 pt-sm-50">
          <div className="row mb-80 mb-md-50">
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  <AnimatedText text="Services" />
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                We use the{" "}
                <span className="mark-decoration-2">power of design</span> to
                solve complex problems and cultivate business solutions.
              </p>
            </div>
          </div>
          <Services />
        </div>
      </section>
      <hr className="mt-0 mb-0" />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row mb-100 mb-md-80 mb-sm-40">
            <div className="col-md-8 col-lg-9 mb-sm-30">
              <h2 className="section-title-large font-alt uppercase mb-60 mb-md-50 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  Selected Work
                </span>
                <span
                  className="section-title-image wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <img
                    src={shape1}
                    width={35}
                    height={35}
                    alt=""
                  />
                </span>
              </h2>
              <p className="section-descr-large mb-0 wow fadeInUp">
                We believe in making{" "}
                <span className="mark-decoration-2">the best work</span>, and
                being the best to work with. We help brands &amp; businesses
                stand out in the changing digital landscape.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 text-end pt-20 pt-md-10 pt-sm-0 local-scroll">
              {/* brutalist-portfolio */}
              {onePage ? (
                <>
                  <a
                    href="#contact"
                    className="link-hover-anim align-middle"
                    data-link-animate="y"
                  >
                  
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to={`/brutalist-portfolio${dark ? "-dark" : ""}`}
                    className="link-hover-anim align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      See all works{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      See all works{" "}
                      <i
                        className="icon-arrow-right size-14"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Portfolio Grid */}
          <Portfolio />

          {/* End Portfolio Grid */}
        </div>
      </section>
   
      <section
        className={`small-section   ${
          dark
            ? "bg-dark-2 bg-dark-alpha-90 light-content"
            : "bg-gray-light-2 bg-light-alpha-90 "
        } bg-scroll`}
        style={{
          backgroundImage:
            {sectionBg3},
        }}
      >
        <div
          className={
            dark ? "section-gradient-top-dark" : "section-gradient-top"
          }
        />
        <div className="position-absolute top-0 start-0 w-100">
          <div className="container">
            {/* Horizontal Line */}
            <hr className="black" />
            {/* End Horizontal Line */}
          </div>
        </div>
        <NewsLetter />{" "}
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container position-relative">
          <div className="row mb-80 mb-md-50">
            <div className="col-md-5">
              <h2 className="section-title-large font-alt uppercase mb-0 mb-sm-30">
                <span className="wow charsAnimInLong" data-splitting="chars">
                  Contact
                </span>
              </h2>
            </div>
            <div className="col-md-7">
              <p className="section-descr-large mb-0 wow fadeInUp">
                We’re open to talk to
                <span className="mark-decoration-2">good people</span>. Just say
                hello and we’ll start a productive cooperation.
              </p>
            </div>
          </div>
          {dark ? <ContactDark /> : <Contact />}
        </div>
      </section>
    </>
  );
}
