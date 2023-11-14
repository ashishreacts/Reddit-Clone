import React, { useState, useEffect } from "react";
import "./NewsCards.css";
import axios from "axios";

function NewsCards(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=manoj jarange&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
      )
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div className="news_cards">
      {data.map((article, index) => (
        <div key={index} className="news_card">
          <img
            className="news_cards-img"
            src={article.image}
            alt={article.title}
          />
          <h3>{article.title}</h3>
          <a href={article.url} className="card-btn" rel="noopener noreferrer">
            See News
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsCards;
