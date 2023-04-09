import React from "react";
import "./merch.css";
import Articles from "./articles";

const Merch = () => {
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  function slide() {
    return (
      <section className="product">
        <button className="pre-btn">
          <img src="../../images/arrow.png" alt="" />
        </button>
        <button className="nxt-btn">
          <img src="../../images/arrow.png" alt="" />
        </button>
        <div className="product-container">
          {Articles.state.articles.map((article, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={article.image} alt={article.title} />
                <button className="card-btn">add to wishlist</button>
              </div>
              <div className="product-info">
                <h2 className="product-brand">{article.title}</h2>
                <span className="price">{article.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return slide();
};

// export default Merch;
