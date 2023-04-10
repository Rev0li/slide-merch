import React from "react";
import "./Slider.css";

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ReactCardSlider =(props)=>{
  const articles = [
    {
      title: "Cup",
      price: "19$",
      image: "card1",
    },
    {
      title: "Sweat",
      price: "39$",
      image: "card2",
    },
    {
      title: "Bag",
      price: "15$",
      image: "card3",
    },
    {
      title: "T-shi",
      price: "23$",
      image: "card4",
    },
    {
      title: "Poster",
      price: "10$",
      image: "card5",
    },
    {
      title: "T-shirt",
      price: "22$",
      image: "card6",
    },
  ];
  return (
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left"/>
      <div className="slider">
        { 
        articles.map((article,index)=>{
          return(
            <div className="slider-card">
              
            </div>
          )
        })
        }
      </div>
      <MdChevronRight size={40} className="slider-icon right"/>
    </div>
  )
}
export default ReactCardSlider;

// npm install react-icons --save