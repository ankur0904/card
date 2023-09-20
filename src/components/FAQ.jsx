import React, { useState } from "react";
import "../styles/Faq.css";

function FAQ() {
  return (
    <>
      <div className="container my-5" >
        <div className="faq_area section_padding_130" id="faq" style={{ height:'600px'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                <div
                  className="section_heading text-center wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h3>
                    <span>Frequently </span> Asked Questions
                  </h3>
                  <p style={{fontSize:'14px'}}>
                    Ask any question.
                  </p>
                  <div className="line" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* FAQ Area*/}
              <div className="col-12 col-sm-10 col-lg-8">
                <div className="accordion faq-accordian" id="faqAccordion">
                  <div
                    className="card border-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="card-header" id="headingOne">
                      <h6
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Qno.1 write any question?
                        <span className="lni-chevron-up" />
                      </h6>
                    </div>
                    <div
                      className="collapse"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card border-0 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="card-header" id="headingTwo">
                      <h6
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Qno.1 ask any question?
                        <span className="lni-chevron-up" />
                      </h6>
                    </div>
                    <div
                      className="collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card border-0 wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="card-header" id="headingThree">
                      <h6
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Qno.2 ask any question?
                        <span className="lni-chevron-up" />
                      </h6>
                    </div>
                    <div
                      className="collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-parent="#faqAccordion"
                    >
                      <div className="card-body">
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p style={{fontSize:'15px', color:'gray'}}>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
