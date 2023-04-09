import React from "react";
import "./merch.css";

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

export default class Merch extends React.Component {
  constructor(props) {
    super(props);
    this.productContainers = React.createRef();
    this.nxtBtn = React.createRef();
    this.preBtn = React.createRef();
  }

  componentDidMount() {
    const productContainers = this.productContainers.current;
    const nxtBtn = this.nxtBtn.current;
    const preBtn = this.preBtn.current;
    const containerDimensions = productContainers.getBoundingClientRect();
    const containerWidth = containerDimensions.width;

    nxtBtn.addEventListener("click", () => {
      productContainers.scrollLeft += containerWidth;
    });

    preBtn.addEventListener("click", () => {
      productContainers.scrollLeft -= containerWidth;
    });
  }

  slide(article) {
    return (
      <section className="product">
        <button className="pre-btn" ref={this.preBtn}>
          <img src="../../images/arrow.png" alt="" />
        </button>
        <button className="nxt-btn" ref={this.nxtBtn}>
          <img src="../../images/arrow.png" alt="" />
        </button>
        <div className="product-container" ref={this.productContainers}>
          <div className="product-card">
            <div className="product-image">
              <img src={`./images/${article.image}.jpg`} alt={article.title} />

              <button className="card-btn">add to wishlist</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">{article.title}</h2>
              <span className="price">{article.price}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        {articles.map((article) => {
          return this.slide(article);
        })}
      </>
    );
  }
}
