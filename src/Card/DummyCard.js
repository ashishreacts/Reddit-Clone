import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DummyCard.css";

function DummyCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNewNews();
  }, []);

  const getNewNews = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=cricket&lang=en&country=pk&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
      )
      .then((response) => {
        if (response.data && response.data.articles) {
          setData(response.data.articles);
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div>
      {data.map((article, index) => (
        <div className="dummy_card" key={index}>
          <div className="card-body">
            <img className="dummy_card-img" src={article.image} alt="Article" />
            <h5 className="dummy_card-title">{article.title}</h5>
            <p className="dummy_card-text">{article.description}</p>
            <a href={article.url} className="dummy-btn ">
              See News
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DummyCard;
