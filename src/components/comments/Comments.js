import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
  const handleComment = () => {};

  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://yt3.ggpht.com/yti/APfAmoFOLBLAac6V1uwbKWByeGSQBQp_-iD_vHBLwgKj2Q=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="avatar"
          className="rounded-circle me-3"
        />

        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Add a comment..."
          />

          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(15)].map((_, id) => (
          <Comment key={id} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
