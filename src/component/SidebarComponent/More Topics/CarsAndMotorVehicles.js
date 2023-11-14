import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./MoreTopics.css";
const CarsAndMotorVehicles = () => {
  const [moreData, setMoreData] = useState([]);

  useEffect(() => {
    const getMoreData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=Cars And Motor Vehicles&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
        );
        return response.data.articles;
      } catch (error) {
        console.error(error.message);
        return [];
      }
    };

    const loadMoreData = async () => {
      const loadData = await getMoreData();
      setMoreData(loadData);
    };

    loadMoreData();
  }, []);

  return (
    <div className="moreData-container">
      <Sidebar />
      <div className="moreData-card-container">
        {moreData.map((data, index) => (
          <div className="moreData-card" key={index}>
            <img
              src={
                data.image
                  ? data.image
                  : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
              }
              className="moreData-card-img-top"
              alt="..."
            />
            <div className="moreData-card-body">
              <h5 className="moreData-card-title">{data.title}</h5>
              <p className="moreData-card-text">{data.description}</p>
              <a href={data.url} className="moreData-btn btn-primary">
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarsAndMotorVehicles;
