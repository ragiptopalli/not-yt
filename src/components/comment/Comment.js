import React from "react";
import "./_comment.scss";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Comment = ({ comment }) => {
  const { textDisplay, authorProfileImageUrl, publishedAt, authorDisplayName } =
    comment;

  return (
    <div className="comment p-2 d-flex">
      <LazyLoadImage
        src={authorProfileImageUrl}
        effect="blur"
        className="rounded-circle me-3"
      />

      <div className="comment__body">
        <p className="comment__header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
