import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./Sitebar.css";
import SitebarShow from "./SitebarShow";

function Sitebar() {
  return (
    <div className="sitebar">
      <div className="title_sitebar">
        <SitebarShow selected Icon={Home} title="Home" />
        <SitebarShow Icon={Whatshot} title="Trending" />
        <SitebarShow Icon={Subscriptions} title="Subscription" />
        <hr />
        <SitebarShow Icon={VideoLibrary} title="Libaryn" />
        <SitebarShow Icon={History} title="History" />
        <SitebarShow Icon={OndemandVideo} title="Your videos" />
        <SitebarShow Icon={WatchLater} title="Warch Later" />
        <SitebarShow Icon={ThumbUpAltOutlined} title="Liked videos" />
        <SitebarShow Icon={ExpandMoreOutlined} title="Show more" />
        <hr />
      </div>
    </div>
  );
}

export default Sitebar;
