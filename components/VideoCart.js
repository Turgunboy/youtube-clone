import React from "react";
import "./VideoCart.css";
import { Avatar } from "@material-ui/core";

function VideoCart({ image, channel, channelImage, title, views, timestamp }) {
  return (
    <div className="videoCart">
      <div className="thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="cart_info">
        <Avatar src={channelImage} alt={channel} className="cart_avatar" />

        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCart;
