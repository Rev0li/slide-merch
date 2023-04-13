import React from "react";
import "./Slider.css";

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// npm install react-icons --save
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";
import card5 from "./images/card5.jpg";
import card6 from "./images/card6.jpg";

const ReactCardSlider =(props)=>{
  const articles = [
    {
      title: "Cup",
      price: "19$",
      image: card1,
    },
    {
      title: "Sweat",
      price: "39$",
      image: card2,
    },
    {
      title: "Bag",
      price: "15$",
      image: card3,
    },
    {
      title: "T-shi",
      price: "23$",
      image: card4,
    },
    {
      title: "Poster",
      price: "10$",
      image: card5,
    },
    {
      title: "T-shirt",
      price: "22$",
      image: card6,
    },

  ];
  // style={{backgroundImage: `url(${article.image})`}}

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div className="main-slider-container">
      
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
      
      <div id="slider">
        
        { 
        articles.map((article,index)=>{
          return(
            <div className="slider-card" key={index}>
              
              <div className="slider-card-image">
                <img src={article.image} className="image"  alt="" />
              </div>
              <div className="slider-card-title">
                <p>{article.title}</p>
              </div>
              <div className="slider-card-price">
                <p>{article.price}</p>
              </div>
              
            </div>
          )
        })
        }
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
  )
}
export default ReactCardSlider;

