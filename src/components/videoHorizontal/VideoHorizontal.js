import React from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";

import moment from "moment";
import numeral from "numeral";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://yt3.ggpht.com/yti/APfAmoFOLBLAac6V1uwbKWByeGSQBQp_-iD_vHBLwgKj2Q=s88-c-k-c0x00ffffff-no-rj-mo"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoComponent__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">Woah jack qysh e ben kete</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(100000).format("0.a")} Views •
          {moment("2022-10-04").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/18445276?s=400&u=29523099e2b0638fc6f84eea6f8df7c6585b40c9&v=4"
            effect="blur"
          /> */}
          <p>Ragip Topalli</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
