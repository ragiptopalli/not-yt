import React from "react";
import "./_videoComponent.scss";

import { AiFillEye } from "react-icons/ai";

const VideoComponent = () => {
  return (
    <div className="videoComponent">
      <div className="videoComponent__top">
        <img
          src="https://i.ytimg.com/vi/XINlEYXA3k0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAD6sGqRQF0BOJTnrMtqCKAcYqBSQ"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="videoComponent__title">
        Create APP in 5 minutes #made by RT
      </div>
      <div className="videoComponent__details">
        <span>
          <AiFillEye /> 5M Views •
        </span>
        <span>5 days Ago</span>
      </div>
      <div className="videoComponent__channel">
        <img
          src="https://yt3.ggpht.com/yti/APfAmoFOLBLAac6V1uwbKWByeGSQBQp_-iD_vHBLwgKj2Q=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <p>Hottest right now</p>
      </div>
    </div>
  );
};

export default VideoComponent;
