import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Buisness.css";
const Moderna = () => {
    const [buisnessData, setBuisnessData] = useState([]);

    useEffect(() => {
      const getBuisnessData = async () => {
        try {
          const response = await axios.get(
            "https://gnews.io/api/v4/search?q=Moderna&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
          );
          return response.data.articles;
        } catch (error) {
          console.error(error.message);
          return [];
        }
      };
  
      const loadBuisnessData = async () => {
        const loadData = await getBuisnessData();
        setBuisnessData(loadData);
      };
  
      loadBuisnessData();
  
    }, []);
  
    return (
      <div className="buisness-container">
        <Sidebar />
        <div className="buisness-card-container">
          {buisnessData.map((data, index) => (
            <div className="buisness-card" key={index}>
              <img
                src={
                  data.image
                    ? data.image
                    : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
                }
                className="buisness-card-img-top"
                alt="..."
              />
              <div className="buisness-card-body">
                <h5 className="buisness-card-title">{data.title}</h5>
                <p className="buisness-card-text">{data.description}</p>
                <a href={data.url} className="buisness-btn btn-primary">
                See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Moderna