import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from '../../img/slideA.png'
import '../Home.css'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div className="imgslider">
        <p className="heading" align="center">Acomplishment</p>
        <Slider {...settings}>
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <img src={pic} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}