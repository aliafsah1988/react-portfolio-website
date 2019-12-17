import React from "react";
import text from "../../constants/text";
import "./style.css";

const WorkCategories = () => {
  const workCategoriesText = text.workCategories;
  return (
    <section
      className="workCategories section-padding text-center"
      data-scroll-index="2"
      id="workCategories"
    >
      <div className="container">
        <div className="section-head wow zoomIn" data-wow-offset="200">
          <h3>{workCategoriesText.title}</h3>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p>{workCategoriesText.intro}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="item mb-30 mb-sm-50 wow fadeInLeft"
              data-wow-offset="200"
            >
              <span className="icon">
                <i className="ti-write"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[0].title}
              </h5>
              <p>{workCategoriesText.fields[0].description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="item mb-30 mb-sm-50 wow fadeInUp"
              data-wow-offset="200"
            >
              <span className="icon">
                <i className="ti-pencil-alt"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[1].title}
              </h5>
              <p>{workCategoriesText.fields[1].description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="item mb-30 mb-sm-50 wow fadeInRight"
              data-wow-offset="200"
            >
              <span className="icon">
                <i className="ti-desktop"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[2].title}
              </h5>
              <p>{workCategoriesText.fields[2].description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="item mb-md-30 mb-sm-50 wow fadeInLeft"
              data-wow-offset="200"
            >
              <span className="icon">
                <i className="ti-settings"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[3].title}
              </h5>
              <p>{workCategoriesText.fields[3].description}</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item mb-sm-50 wow fadeInUp" data-wow-offset="200">
              <span className="icon">
                <i className="ti-mobile"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[4].title}
              </h5>
              <p>{workCategoriesText.fields[4].description}</p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 wow fadeInRight"
            data-wow-offset="200"
          >
            <div className="item">
              <span className="icon">
                <i className="ti-pie-chart"></i>
              </span>
              <h5 className="sub-heading">
                {workCategoriesText.fields[5].title}
              </h5>
              <p>{workCategoriesText.fields[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCategories;
