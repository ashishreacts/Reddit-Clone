import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Sports.css";
const MeganAnderson = () => {
    const [sportData, setSportData] = useState([]);

    useEffect(() => {
      const getSportData = async () => {
        try {
          const response = await axios.get(
            "https://gnews.io/api/v4/search?q=Megan Anderson&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
          );
          return response.data.articles;
        } catch (error) {
          console.error(error.message);
          return [];
        }
      };
  
      const loadSportData = async () => {
        const loadData = await getSportData();
        setSportData(loadData);
      };
  
      loadSportData();
  
    }, []);
  
    return (
      <div className="sport-container">
        <Sidebar />
        <div className="sport-card-container">
          {sportData.map((data, index) => (
            <div className="sport-card" key={index}>
              <img
                src={
                  data.image
                    ? data.image
                    : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
                }
                className="sport-card-img-top"
                alt="..."
              />
              <div className="sport-card-body">
                <h5 className="sport-card-title">{data.title}</h5>
                <p className="sport-card-text">{data.description}</p>
                <a href={data.url} className="sport-btn btn-primary">
                 See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MeganAnderson