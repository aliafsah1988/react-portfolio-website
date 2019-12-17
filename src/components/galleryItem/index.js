import React from "react";
import osDetect from '../../utils/osDetect';

const GalleryItem = props => {
  return (
    <div className={props.item.upperClassNames} onClick={ osDetect.isMobile() ? props.clicked : null}>
      <div className={props.item.classNames} data-wow-offset="200">
        {/* eslint-disable-next-line */}
        <img src={props.item.imageName} alt="Image" />

        <div className="top-overlay"></div>
        <div className="bottom-overlay"></div>

        <div className="overlay-info v-middle">
          <h5 className="sub-heading">{props.item.title}</h5>
          <div className="icons">
            {props.hasLink ? (
              <div onClick={props.clicked}>
                <span className="icon">
                  <i className="fas fa-link"></i>
                </span>
              </div>
            ) : null}
            {props.hasImage ? (
              <a href={props.image} className="popup-img">
                <span className="icon">
                  <i className="fas fa-search"></i>
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
