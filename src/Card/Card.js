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
                <button type="button" class="card-btn">
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
                <button type="button" class="card-btn">
                  <i className="bi-plus-circle-dotted">
                    <span>New</span>
                  </i>
                </button>
              </li>
              <li>
                <button type="button" class="card-btn">
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
                Fifty for Rinku Singh! <a href="#">#IPL2023 #KKRvSRH</a>
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
                शराब घोटाले के असली रचनाकार <a href="#">#ArvindKejriwal</a> का
                तिहाड़ जेल में बंद शराब घोटाले के आरोपियों ने नाम लिया है।
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
