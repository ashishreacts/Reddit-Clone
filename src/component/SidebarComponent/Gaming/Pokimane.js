import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Game.css";
const Pokimane = () => {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
      const getGameData = async () => {
        try {
          const response = await axios.get(
            "https://gnews.io/api/v4/search?q=pokemon&lang=en&country=us&max=10&apikey=8696f4bed5e7aff4f19b7eb363acd0d3"
          );
          return response.data.articles;
        } catch (error) {
          console.error(error.message);
          return [];
        }
      };
  
      const loadGameData = async () => {
        const loadData = await getGameData();
        setGameData(loadData);
      };
  
      loadGameData();
  
    }, []);
  
    return (
      <div className="game-container">
        <Sidebar />
        <div className="game-card-container">
          {gameData.map((data, index) => (
            <div className="game-card" key={index}>
              <img
                src={
                  data.image
                    ? data.image
                    : "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
                }
                className="game-card-img-top"
                alt="..."
              />
              <div className="game-card-body">
                <h5 className="game-card-title">{data.title}</h5>
                <p className="game-card-text">{data.description}</p>
                <a href={data.url} className="game-btn btn-primary">
                 See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Pokimane