import React from "react";
import "./_comment.scss";
import moment from "moment";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://yt3.ggpht.com/yti/APfAmoFOLBLAac6V1uwbKWByeGSQBQp_-iD_vHBLwgKj2Q=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="avatar"
        className="rounded-circle me-3"
      />

      <div className="comment__body">
        <p className="comment__header mb-1">
          Ragip Topalli • {moment("2022-10-04").fromNow()}
        </p>
        <p className="mb-0">Wow jack how did you do that!</p>
      </div>
    </div>
  );
};

export default Comment;
