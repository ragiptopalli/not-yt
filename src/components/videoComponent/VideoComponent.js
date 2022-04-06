import React, { useEffect, useState } from "react";
import "./_videoComponent.scss";

import { AiFillEye } from "react-icons/ai";
import requestVideos from "../../api";

import moment from "moment";
import numeral from "numeral";

const VideoComponent = ({ videoItem }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = videoItem;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const get_video_items_details = async () => {
      const {
        data: { items },
      } = await requestVideos("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_items_details();
  }, [_videoId]);

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

  return (
    <div className="videoComponent">
      <div className="videoComponent__top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="videoComponent__title">{title}</div>
      <div className="videoComponent__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="videoComponent__channel">
        <img src={channelIcon?.url} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoComponent;
