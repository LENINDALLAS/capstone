import React from "react";
import "../Home/Caroussel/AliceCarousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function IdeaPageCarousel({ innovatorItems }) {
    // console.log(innovatorItems);
    return (
        <div className="carousel">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                {
                    innovatorItems.map((img) => {
                        // console.log(img, 'image')
                        return (
                            <img src={img} className="sliderimg" alt="1" style={{ 'width': '60%', 'height': '450px' }} />
                        )
                    })
                }

            </AliceCarousel>
        </div>
    );
}
