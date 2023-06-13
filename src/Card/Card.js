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
        setData(response.data.articles);
      });
  };
  const getTopNews = () => {
    axios
      .get(
        " https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eb72608b2f62483d83980969c871b0b3"
      )
      .then((response) => {
        setData(response.data.articles);
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
                <button
                  type="button"
                  className="card-btn-post"
                  onClick={getHotNews}
                >
                  <i className="bi-fire">
                    <span>Hot</span>
                  </i>
                </button>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="card-btn-post dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    India
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Everywhere
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          United States
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Argentina
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Australia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Bulgaria
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Canada
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Chile
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Colombia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Croatia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Finland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          France
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Germany
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Greece
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Hungary
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Iceland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          India
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Ireland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Italy
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Japan
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Malaysia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Mexico
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          New Zealand
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Poland
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Portugal
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Romania
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Serbia
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Singapore
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Spain
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Sweden
                        </a>
                      </li>
                      <br />
                      <li>
                        <a className="dropdown-item" href="https://example.com">
                          Taiwan
                        </a>
                      </li>
                      <br />
                    </ul>
                  </button>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="card-btn-post"
                  onClick={getNewNews}
                >
                  <i className="bi-plus-circle-dotted">
                    <span>New</span>
                  </i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="card-btn-post"
                  onClick={getTopNews}
                >
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
              <img src={value.urlToImage} className="card-img" alt="..." />
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
