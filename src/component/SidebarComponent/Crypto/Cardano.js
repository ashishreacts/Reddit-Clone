import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Crypto.css";
const Cardano = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const getCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=Cardano&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
        );
        return response.data.articles;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    };

    const loadCryptoData = async () => {
      const loadData = await getCryptoData();
      setCryptoData(loadData);
    };

    loadCryptoData();
  }, []);

  return (
    <div className="crypto-container">
      <Sidebar />
      <div className="crypto-card-container">
        {cryptoData.map((data, index) => (
          <div className="crypto-card" key={index}>
            <img
              src={
                data.image
                  ? data.image
                  : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
              }
              className="crypto-card-img-top"
              alt="..."
            />
            <div className="crypto-card-body">
              <h5 className="crypto-card-title">{data.title}</h5>
              <p className="crypto-card-text">{data.description}</p>
              <a href={data.url} className="crypto-btn btn-primary">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardano;
