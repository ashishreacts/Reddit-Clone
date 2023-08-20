import React, { useRef } from "react";
import NewsCards from "./NewsCards";
import "./DataSlider.css";

function DataSlider() {
  const boxRef = useRef(null);

  const prevBtn = () => {
    const box = boxRef.current;
    if (box) {
      const widthOfCard = box.clientWidth;
      box.scrollLeft = box.scrollLeft - widthOfCard;
    }
  };

  const nextBtn = () => {
    const box = boxRef.current;
    if (box) {
      const widthOfCard = box.clientWidth;
      box.scrollLeft = box.scrollLeft + widthOfCard;
    }
  };

  return (
    <div className="news_data_slider">
      <button className="pre_btn" onClick={prevBtn}>
        <p>&lt;</p>
      </button>
      <button className="post_btn" onClick={nextBtn}>
        <p>&gt;</p>
      </button>
      <div className="news_container" ref={boxRef}>
        <NewsCards />
      </div>
    </div>
  );
}

export default DataSlider;
