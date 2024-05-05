import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import {Link} from "react-router-dom"
const Feed = ({ sidebar }) => {
  return (
    <div className={`feed card ${sidebar ? " " : "small-feed"}`}>
      {" "}
      <Link to={`video/20/345322`} className={`card2 `}>
        <img className="lion" src={thumbnail1} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </Link>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail2} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail3} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail4} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail5} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail6} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail7} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail8} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail6} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail1} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail2} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail3} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail4} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail5} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail6} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail7} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail8} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
      <div className={`card2 `}>
        <img className="lion" src={thumbnail6} />
        <h2>Best chanel to learn cooding</h2>
        <h3>Greatstack</h3>
        <p>25k Views &bull; 2 days ago </p>
      </div>
    </div>
  );
};

export default Feed;
