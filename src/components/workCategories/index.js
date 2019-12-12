import React from "react";
import './style.css';

const WorkCategories = () => {
  return (
    <section
      className="workCategories section-padding text-center"
      data-scroll-index="2"
      id='workCategories'
    >
      <div className="container">
        <div className="section-head wow zoomIn" data-wow-offset="200">
          <h3>What I Did So Far</h3>
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <p>
                As a software engineer I was more active in these areas.
              </p>
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
              <h5 className="sub-heading">Front End Engineer</h5>
              <p>
                Design and develop several medium to large projects from scratch and be a part of great teams of front end developers.
              </p>
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
              <h5 className="sub-heading">Software Architect</h5>
              <p>
                Architect several projects with server, web client and mobile client with different technologies.
              </p>
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
              <h5 className="sub-heading">Back End Designer And Developer</h5>
              <p>
                Design and develope several servers with Node.js, ASP.NET MVC and ASP.NET Core.
              </p>
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
              <h5 className="sub-heading">Microsoft Stack Developer</h5>
              <p>
                C#, VB.NET, Windows Forms and WPF expret.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item mb-sm-50 wow fadeInUp" data-wow-offset="200">
              <span className="icon">
                <i className="ti-mobile"></i>
              </span>
              <h5 className="sub-heading">RDBMS and No Sql Desinger</h5>
              <p>
                Design and build several DataBases with MS SQL Server, My SQL, MongoDB and etc.
              </p>
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
              <h5 className="sub-heading">Start Up Expert</h5>
              <p>
                Create from scratch and be a part of several start ups. Very familiar with start up enviroments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCategories;
