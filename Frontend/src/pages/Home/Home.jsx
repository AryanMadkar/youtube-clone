import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
const Home = ({ sidebar }) => {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? " " : "large-container"}`}>
        <Feed sidebar={sidebar}/>
      </div>
    </div>
  );
};

export default Home;
