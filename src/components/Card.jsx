import React from "react";
import data from "../data";

function Card() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card d-flex flex-column justify-content-center align-items-center custom-card">
              <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
              <div className="card-body text-center">
                <h5 className="card-title heading">{item.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text mb-0 bio-para">
                  <span className="bio-span">Technologies: </span>
                  {item.technology}
                </p>
                <p className="card-text mb-0 bio-para">
                  <span className="bio-span">Last project built on: </span>
                  {item.lastProject}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;