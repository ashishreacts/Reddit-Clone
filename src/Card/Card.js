import React from "react";
import "./Card.css";
export const Card = () => {
  return (
    <>
      <div className="card-main">
        {/* Popular posts */}
        <h4 className="post-title">Popular Post</h4>
        <div className="card-popular-post">
          <div className="card-popular-post-body">
            <ul>
              <li>
                <button type="button" className="card-btn">
                  <i className="bi-fire">
                    <span>Hot</span>
                  </i>
                </button>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="card-btn dropdown-toggle"
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
                <button type="button" className="card-btn">
                  <i className="bi-plus-circle-dotted">
                    <span>New</span>
                  </i>
                </button>
              </li>
              <li>
                <button type="button" className="card-btn">
                  <i className="bi-bar-chart">
                    <span>Top</span>
                  </i>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 1 */}
        <div className="card">
          <div className="card-body">
            <div className="icons">
              <i className="bi-arrow-up-circle"></i>
              <br />
              <i className="bi-arrow-down-circle"></i>
            </div>
            <div className="card-matter">
              <h3 className="card-title">
                BCCI mulls Diwali window for the WPL
              </h3>

              <img
                className="card-img"
                src="https://www.cricbuzz.com/a/img/v1/595x396/i1/c287469/the-inaugural-season-was-held.jpg"
                alt="WPL"
              />
              <p className="card-text">
                The Board of Control for Cricket in India (BCCI) is
                contemplating having a Diwali window for the Women's Premier
                League (WPL), the maiden edition of which ended last month. The
                festival season for the league means it could clash with the
                home international matches but the BCCI is wanting to have a gap
                between the IPL and WPL. Five days after WPL concluded on March
                26 this year, the IPL had started. The BCCI also will introduce
                the IPL's home and away format which could not be held this year
                due to want of time. "We are mulling the possibility of
                scheduling the WPL, in the home and away format, in the Diwali
                window; not two seasons in a year but just a different time
                window," Jay Shah said on Friday.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card">
          <div className="card-body">
            <div className="icons">
              <i className="bi-arrow-up-circle"></i>
              <br />
              <i className="bi-arrow-down-circle"></i>
            </div>
            <div className="card-matter">
              <h3 className="card-title">
                Fifty for Rinku Singh!{" "}
                <a href="https://example.com">#IPL2023 #KKRvSRH</a>
              </h3>
              <img
                className="card-img"
                src="https://pbs.twimg.com/media/FtsVzm6akAAP1zb?format=jpg&name=small"
                alt="WPL"
              />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card">
          <div className="card-body">
            <div className="icons">
              <i className="bi-arrow-up-circle"></i>
              <br />
              <i className="bi-arrow-down-circle"></i>
            </div>
            <div className="card-matter">
              <h3 className="card-title">
                शराब घोटाले के असली रचनाकार{" "}
                <a href="https://example.com">#ArvindKejriwal</a> का तिहाड़ जेल
                में बंद शराब घोटाले के आरोपियों ने नाम लिया है।
              </h3>
              <img
                className="card-img"
                src="https://pbs.twimg.com/media/FtrLGbnXoAUtkEX?format=jpg&name=900x900"
                alt="WPL"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
