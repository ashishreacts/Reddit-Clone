import React, { useState } from "react";
import "./Card.css";
import axios from "axios";
export const Card = () => {
  const [data, setData] = useState([]);
  const [newNews, setNewNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const getHotNews = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?country=us&apiKey=eb72608b2f62483d83980969c871b0b3"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  const getNewNews = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eb72608b2f62483d83980969c871b0b3"
      )
      .then((response) => {
        setNewNews(response.data.articles);
      });
  };
  const getTopNews = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eb72608b2f62483d83980969c871b0b3"
      )
      .then((response) => {
        setTopNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="card-main">
        {/* Popular posts */}
        <h4 className="post-title">Popular Post</h4>
        <div className="card-popular-post">
          <div className="card-popular-post-body">
            <ul>
              <li>
                <button type="button" class="card-btn" onClick={getHotNews}>
                  <i className="bi-fire">
                    <span>Hot</span>
                  </i>
                </button>
              </li>
              <li>
                <div class="dropdown">
                  <button
                    class="card-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    India
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Everywhere
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          United States
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Argentina
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Australia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Bulgaria
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Canada
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Chile
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Colombia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Croatia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Finland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          France
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Germany
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Greece
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Hungary
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Iceland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          India
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Ireland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Italy
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Japan
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Malaysia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Mexico
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          New Zealand
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Poland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Portugal
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Romania
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Serbia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Singapore
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Spain
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Sweden
                        </a>
                      </li>
                      <br />
                      <li>
                        <a class="dropdown-item" href="#">
                          Taiwan
                        </a>
                      </li>
                      <br />
                    </ul>
                  </button>
                </div>
              </li>
              <li>
                <button type="button" class="card-btn" onClick={getNewNews}>
                  <i className="bi-plus-circle-dotted">
                    <span>New</span>
                  </i>
                </button>
              </li>
              <li>
                <button type="button" class="card-btn" onClick={getTopNews}>
                  <i className="bi-bar-chart">
                    <span>Top</span>
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 1 */}
        {data.map((value) => {
          return (
            <div className="card">
              <img src={value.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          );
        })}
        {newNews.map((value) => {
          return (
            <div className="card">
              <img src={value.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          );
        })}
        {topNews.map((value) => {
          return (
            <div className="card">
              <img src={value.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-text">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
