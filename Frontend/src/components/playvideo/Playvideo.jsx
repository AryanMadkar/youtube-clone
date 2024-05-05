import React from "react";
import "./playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import Video from "./../../pages/Video/Video";
const Playvideo = () => {
  return (
    <div className="play-video ">
      <video src={video1} autoPlay muted controls></video>
      <h3>Best youtube chanel to learn web dev</h3>
      <div className="play-video-info">
        <p>1523 views &bull; 2 days ago</p>
        <div className="flex items-center justify-around ">
          <span>
            <img src={like} />
            125
          </span>
          <span>
            <img src={dislike} />
            125
          </span>
          <span>
            <img src={share} />
            Share
          </span>
          <span>
            <img src={save} />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher items-center m-3 flex justify-between ">
        <div className="flex items-center ">
          <img className="rounded-2xl mx-4 h-[3rem] w-[3rem]" src={jack} alt="" />
          <div className="publisher-info bg-slate-800 border rounded-2xl p-1 text-center">
            <p className="text-xl">Aradhya</p>
            <p>125 subscribers</p>
          </div>
        </div>
        <div>
          <button className="text-xl hover:scale-90 p-2 rounded-lg bg-red-600 mr-2">Suscribe</button>
        </div>
      </div>

      <div className="vid-description m-3">
        <p>chanel that makes learaning easy</p>
        <p>Suscribe my channel</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              jack Nicolson<span>1 day ago</span>
            </h3>
            <p>This i a ver nice video thankyou very much </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              jack Nicolson<span>1 day ago</span>
            </h3>
            <p>This i a ver nice video thankyou very much </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              jack Nicolson<span>1 day ago</span>
            </h3>
            <p>This i a ver nice video thankyou very much </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} />
          <div>
            <h3>
              jack Nicolson<span>1 day ago</span>
            </h3>
            <p>This i a ver nice video thankyou very much </p>
            <div className="comment-action">
              <img src={like} />
              <span>244</span>
              <img src={dislike} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
