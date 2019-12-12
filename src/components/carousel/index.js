import React from "react";
import Slider from "react-slick";
import osDetect from '../../utils/osDetect';
import skills from '../../constants/skills';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

class Carousel extends React.Component {
  render() {
    const Skills = skills.map((skill) => { 
        return (
            <div>
            <img src={skill.image} alt={skill.name} className='carousel-image' style={{width:skill.width, height: skill.height}}/>
            <h3 className='carousel-title'>{skill.name}</h3>
          </div>
        )
      });

    let slidesToShow = 4;
    const screenWidth = window.screen.width;
    if(osDetect.isMobile() || screenWidth < 991) {
      slidesToShow = 2;
    }

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      focusOnSelect: true,
      pauseOnHover: true,
      sweep: true,
      useTransform: true,
    };
    return (
      <Slider {...settings}>
        {Skills}
      </Slider>
    );
  }
}

export default Carousel