import React from "react";
import "./SitebarShov.css";

function SitebarShow({ Icon, title, selected }) {
  return (
    <div className={`SitebarShov ${selected && "selected"} `}>
      <Icon className="icon_sitebarshow" />
      <h2>{title}</h2>
    </div>
  );
}

export default SitebarShow;
