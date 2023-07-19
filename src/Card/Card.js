import React, { useState } from "react";
import "./Card.css";
import axios from "axios";
import Modal from "./Modal";

export const Card = () => {
  const [data, setData] = useState([]);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const [formData, setFormData] = useState(null);
  const [formEntries, setFormEntries] = useState([]);
  const handleLikes = (id) => {
    const updatedData = data.map((article) => {
      if (article.id === id) {
        article.likes++;
      }
      return article;
    });
    setData(updatedData);
  };

  const toggleLike = () => {
    setLike((prevLike) => !prevLike);
  };
  const formatCount = (count) => {
    return count.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  const increment = (id) => {
    const updatedData = data.map((article) => {
      if (article.id === id) {
        article.count++;
      }
      return article;
    });
    setData(updatedData);
  };

  const decrement = (id) => {
    const updatedData = data.map((article) => {
      if (article.id === id && article.count > 0) {
        article.count--;
      }
      return article;
    });
    setData(updatedData);
  };

  // const getData = (url) => {
  //   axios.get(url).then((response) => {
  //     const data = response.data.articles.map((article, index) => {
  //       article.id = Date.now() + index;
  //       article.likes = 0;
  //       return article;
  //     });
  //     setData(data);
  //   });
  // };

  const getData = (url) => {
    axios.get(url).then((response) => {
      const data = response.data.articles.map((article, index) => {
        article.id = Date.now() + index;
        article.likes = 0;
        article.count = 0; // Add a count property
        article.comments = [];
        return article;
      });
      setData(data);
    });
  };
  const addComment = (id) => {
    const commentObj = {
      id: Date.now(),
      text: comment,
    };
    const updatedData = data.map((article) => {
      if (article.id === id) {
        article.comments.push(commentObj);
      }
      return article;
    });
    setData(updatedData);
    setComment("");
    setShowCommentInput(true);
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "initial";
  };

  const handleFormSubmit = (data) => {
    // setFormData(data);
    setFormEntries((prevEntries) => [...prevEntries, data]);
    handleCloseModal();
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
                  onClick={() => {
                    getData(
                      "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=80ad10984b50944aaf52a052eb31ae04"
                    );
                  }}
                >
                  <i className="bi-fire">
                    <span className="popular_post_card">Hot</span>
                  </i>
                </button>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="popular_post_card card-btn-post dropdown-toggle"
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
                  onClick={() => {
                    getData(
                      "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=80ad10984b50944aaf52a052eb31ae04"
                    );
                  }}
                >
                  <i className="bi-plus-circle-dotted">
                    <span className="popular_post_card">New</span>
                  </i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="card-btn-post"
                  onClick={() => {
                    getData(
                      "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=80ad10984b50944aaf52a052eb31ae04"
                    );
                  }}
                >
                  <i className="bi-bar-chart">
                    <span className="popular_post_card">Top</span>
                  </i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className=" card-btn-post"
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  onClick={handleOpenModal}
                >
                  <i className="bi-file-earmark-plus">
                    <span className="popular_post_card">New Post</span>
                  </i>
                </button>
                {showModal && (
                  <Modal
                    handleCloseModal={handleCloseModal}
                    handleFormSubmit={handleFormSubmit}
                  />
                )}
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
                    <i
                      className="bi-arrow-up-circle"
                      onClick={() => increment(value.id)}
                    ></i>
                  </div>

                  <span>{formatCount(value.count)}</span>

                  <div className="downword">
                    <i
                      className="bi-arrow-down-circle"
                      onClick={() => decrement(value.id)}
                    ></i>
                  </div>
                </span>

                {/*  3*/}
                <img
                  src={value.image}
                  className="card-img"
                  alt="card-img"
                  onDoubleClick={() => {
                    handleLikes(value.id);
                  }}
                />
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

                <div className="card-footer">
                  {like ? (
                    <i
                      className="bi-hand-thumbs-up"
                      onClick={() => {
                        handleLikes(value.id);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{value.likes} </span>
                    </i>
                  ) : (
                    <i
                      className="bi-hand-thumbs-up "
                      // onClick={() => {
                      //   handleLikes(value.id);
                      // }}
                      onClick={toggleLike}
                      style={{ cursor: "pointer" }}
                    >
                      <span> {value.likes} </span>
                    </i>
                  )}
                  &nbsp;&nbsp;
                  <i
                    className="bi-chat-left-dots"
                    onClick={toggleCommentInput}
                    style={{ cursor: "pointer" }}
                  >
                    <span> Comment </span>
                  </i>
                  <div className="comments-list">
                    {value.comments.map((comment) => (
                      <div key={comment.id} className="comment">
                        {comment.text}
                      </div>
                    ))}
                  </div>
                  {/* Comment input */}
                  {showCommentInput && (
                    <div className="comment-input">
                      <input
                        type="text"
                        className="comments_input"
                        placeholder="&nbsp; Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <button
                        className="comment_btn"
                        onClick={() => addComment(value.id)}
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {formEntries.length > 0 && (
        <div>
          {/*  */}
          {formEntries.map((entry, index) => (
            <div className="card" style={{ width: "600px" }} key={index}>
              <div className="card-body">
                {entry.image && (
                  <img
                    src={URL.createObjectURL(entry.image)}
                    className="card-img"
                    alt="Uploaded"
                  />
                )}
                <h5 className="card-title">{entry.heading}</h5>
                <p className="card-text">{entry.description}</p>
              </div>
            </div>
          ))}
          {/*  */}
        </div>
      )}
    </>
  );
};

export default Card;
