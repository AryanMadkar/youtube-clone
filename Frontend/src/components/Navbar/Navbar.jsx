import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
const Navbar = ({setSidebar}) => {
  return (
    <div
      id="nav"
      className="flex  w-[100%]  items-center justify-between h-auto bg-black"
    >
      <div className="flex ">
        <img id="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} className="menu-icon" src={menu_icon} />
        <img id="logo" className="logo w-[130px] " src={logo} />
      </div>
      <div className="flex">
        <div className="flex items-center w-[47rem] border-none  ">
          <input
            className="rounded-l-3xl text-sm m-2 mr-0 p-3 h-8  border-none outline-none w-[100%]"
            type="text"
            placeholder="search"
          />
          <img
            className="search-icon w-[35px] ml-0  border-l-2 p-1 border-black h-[34px] bg-[#333333] rounded-r-3xl  "
            src={search_icon}
          />
        </div>
      </div>
      <div className="flex">
        <img className="" src={upload} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
