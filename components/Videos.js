import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCart";
import img1 from "../tesla/48d87b7124e03248-main.jpg";
import img2 from "../tesla/design-solar-panels-social.jpg";
import img3 from "../tesla/download.jpeg";
import img4 from "../tesla/lhd-model-3-social_large.png";
import img5 from "../tesla/ms-main-hero-desktop.jpeg";
import img6 from "../tesla/tesla-model-s-01_.jpg";
import img7 from "../tesla/tesla-model-s-ii-3840x2160-21791.jpg";

function Videos() {
  return (
    <div className="videos">
      <h2>Recommended</h2>
      <div className="videos_video">
        <VideoCard
          image={img1}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img1}
        />{" "}
        <VideoCard
          image={img2}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img2}
        />{" "}
        <VideoCard
          image={img3}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img3}
        />{" "}
        <VideoCard
          image={img4}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img4}
        />{" "}
        <VideoCard
          image={img5}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img5}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />{" "}
        <VideoCard
          image={img6}
          title="becom a Web Developer in 10 minuts / 2019/2020"
          views="2.3M Views"
          timestamp="3 day ago"
          channel="Turgunboy"
          channelImage={img6}
        />
      </div>
    </div>
  );
}

export default Videos;
