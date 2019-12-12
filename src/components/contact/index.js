import React from "react";
import contactInfo from '../../constants/contactInfo';
import './style.css';

const Contact = () => {
  return (
    <section className="contact text-center" data-scroll-index="6">
      <div className="container">
      
        <div className="contact-info">
          <div className="row no-gutters">
            <div
              className="item col-lg-4 mb-md-50 wow fadeInLeft"
              data-wow-offset="50"
            >
              <span className="icon">
                <i className="ti-mobile"></i>
              </span>
              <h6>Phone</h6>
              <p>{contactInfo.phone}</p>
            </div>

            <div
              className="item col-lg-4 mb-md-50 wow fadeInDown"
              data-wow-offset="50"
            >
            </div>

            <div className="item col-lg-4 wow fadeInRight" data-wow-offset="50">
              <span className="icon">
                <i className="ti-email"></i>
              </span>
              <h6>Email</h6>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
