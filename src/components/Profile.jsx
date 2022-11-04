import React from "react";
import profileImg from "../img/profile-img.jpeg";
import arrow from "../img/arrow.png";
import slack from "../img/slack-icon.jpeg";
import profileimage from "../img/profile-image.png";

const Profile = () => {
  return (
    <div className="app">
      <div className="profile">
        <div className="main-section">
          <div className="profile-section">
            <img src={profileImg} alt="profile-img" className="profile__img" />

            <div>
              <img src={arrow} alt="arrow" className="arrow" />
              <h2 className="h2">Onyeka Asumah</h2>

              <div className="link-section">
                <div>
                  <button id="twitter" className="twitter">
                    <a
                      href="https://twitter.com/yekasumah/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </button>
                </div>
                <div>
                  <button id="btn__zuri" className="btn__zuri">
                    <a
                      href="https://training.zuri.team/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zuri Team
                    </a>
                  </button>

                  <div>
                    <button id="books" className="books">
                      <a
                        href="http://books.zuri.team /"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Zuri Books
                      </a>
                    </button>
                  </div>

                  <div>
                    <button id="book__python" className="book__python">
                      <a
                        href="https://books.zuri.team/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Python Books
                      </a>
                    </button>
                  </div>

                  <div>
                    <button id="pitch" className="pitch">
                      <a
                        href="https://background.zuri.team/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Background Check For Coders
                      </a>
                    </button>
                  </div>

                  <div>
                    <button id="book__design" className="book__design">
                      <a
                        href="https://books.zuri.team/design-rules"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Design Books
                      </a>
                    </button>
                  </div>
                </div>

                <div className="social-section">
                  <img src={slack} alt="slack" className="slack" id="slack" />
                  <img
                    src={profileimage}
                    alt="profileimage"
                    className="profileimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
