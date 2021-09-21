import React from "react";
import "./AliceCarousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function App({ innovatorItems }) {
  // console.log(innovatorItems);
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        {
          innovatorItems.map((img) => {
            // console.log(img, 'image')
            return (
              <img src={img} className="sliderimg" alt="1" style={{ 'width': '80%', 'height': '250px' }} />
            )
          })
        }

      </AliceCarousel>
    </div>
  );
}
