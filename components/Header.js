import { Avatar } from "@material-ui/core";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
  VideoCallOutlined,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import img1 from "../tesla/48d87b7124e03248-main.jpg";

function Header() {
  return (
    <div className="header">
      <div className="logo_header">
        <Menu className="icon" />
        <h1>
          You <span>Tube</span>
        </h1>
      </div>
      <div className="center_header">
        <input type="text" placeholder="Search" />
        <Search className="iconbtn" />
      </div>
      <div className="right_header">
        <VideoCall className="icon" />
        <Apps className="icon" />
        <Notifications className="icon" />
        <Avatar className="icon" scr={img1} alt="my avatar" />
      </div>
    </div>
  );
}

export default Header;
