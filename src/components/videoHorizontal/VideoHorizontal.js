import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import requestVideos from "../../api";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video }) => {
  const {
    id,
    snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_items_details = async () => {
      const {
        data: { items },
      } = await requestVideos("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_items_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await requestVideos("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.medium);
    };
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${id.videoId}`);
  };

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src={thumbnails?.medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/18445276?s=400&u=29523099e2b0638fc6f84eea6f8df7c6585b40c9&v=4"
            effect="blur"
          /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
