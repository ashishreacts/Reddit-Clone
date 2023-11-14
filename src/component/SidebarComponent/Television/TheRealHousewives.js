import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Television.css";
const TheRealHousewives = () => {
  const [televisionData, setTelevisionData] = useState([]);

  useEffect(() => {
    const getTelevisionData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=The Real Housewives of Atlanta&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
        );
        return response.data.articles;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    };

    const loadTelevisionData = async () => {
      const loadData = await getTelevisionData();
      setTelevisionData(loadData);
    };

    loadTelevisionData();
  }, []);

  return (
    <div className="television-container">
      <Sidebar />
      <div className="television-card-container">
        {televisionData.map((data, index) => (
          <div className="television-card" key={index}>
            <img
              src={
                data.image
                  ? data.image
                  : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
              }
              className="television-card-img-top"
              alt="..."
            />
            <div className="television-card-body">
              <h5 className="television-card-title">{data.title}</h5>
              <p className="television-card-text">{data.description}</p>
              <a href={data.url} className="television-btn btn-primary">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheRealHousewives;
