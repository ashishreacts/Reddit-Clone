import React, { useState } from "react";
import "./Card.css";
import axios from "axios";
export const Card = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const formatCount = (count) => {
    return count.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const getHotNews = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=80ad10984b50944aaf52a052eb31ae04"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  const getNewNews = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=80ad10984b50944aaf52a052eb31ae04"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  const getTopNews = () => {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=80ad10984b50944aaf52a052eb31ae04"
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
            <div className="card" key={value.id}>
              <div className="card-body">
                {/* icon */}
                <span className="icons">
                  <div className="upword">
                    <i className="bi-arrow-up-circle" onClick={increment}></i>
                  </div>

                  <span>{formatCount(count)}</span>

                  <div className="downword">
                    <i className="bi-arrow-down-circle" onClick={decrement}></i>
                  </div>
                </span>
                {/*  */}
                <img src={value.image} className="card-img" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{value.title}</h4>
                  <p className="card-text">{value.description}</p>
                  <a
                    href={value.url}
                    className="card-btn"
                    rel="noopener noreferrer"
                  >
                    See News
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
