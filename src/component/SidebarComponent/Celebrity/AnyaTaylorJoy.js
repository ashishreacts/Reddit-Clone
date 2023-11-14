import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Celebrity.css";
const AnyaTaylorJoy = () => {
  const [celebrityData, setCelebrityData] = useState([]);

  useEffect(() => {
    const getCelebrityData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=Anya Taylor Joy&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
        );
        return response.data.articles;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    };

    const loadCelebrityData = async () => {
      const loadData = await getCelebrityData();
      setCelebrityData(loadData);
    };

    loadCelebrityData();
  }, []);

  return (
    <div className="celebrity-container">
      <Sidebar />
      <div className="celebrity-card-container">
        {celebrityData.map((data, index) => (
          <div className="celebrity-card" key={index}>
            <img
              src={
                data.image
                  ? data.image
                  : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
              }
              className="celebrity-card-img-top"
              alt="..."
            />
            <div className="celebrity-card-body">
              <h5 className="celebrity-card-title">{data.title}</h5>
              <p className="celebrity-card-text">{data.description}</p>
              <a href={data.url} className="celebrity-btn btn-primary">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnyaTaylorJoy;
