import React from "react";
import "./Slider.css";

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// npm install react-icons --save
const ReactCardSlider =(props)=>{
  const articles = [
    {
      title: "Cup",
      price: "19$",
      image: "./images/card1.jpg",
    },
    {
      title: "Sweat",
      price: "39$",
      image: "./images/card2.jpg",
    },
    {
      title: "Bag",
      price: "15$",
      image: "./images/card3.jpg",
    },
    {
      title: "T-shi",
      price: "23$",
      image: "./images/card4.jpg",
    },
    {
      title: "Poster",
      price: "10$",
      image: "./images/card5.jpg",
    },
    {
      title: "T-shirt",
      price: "22$",
      image: './images/card6.jpg',

    },
  ];

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
              
              <div className="slider-card-image" style={{backgroundImage: `url(${article.image})`}} >
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

