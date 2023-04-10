import Merch from "./Merch/merch3";

function App() {
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
  return (
    <div className="product-container">
      <button class="pre-btn">
        <img src="./arrow.png" alt="" />
      </button>
      <button class="nxt-btn">
        <img src="./arrow.png" alt="" />
      </button>

      <Merch />
    </div>
  );
}
