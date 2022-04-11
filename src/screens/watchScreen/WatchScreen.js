import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosById } from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
          {!loading ? (
            <VideoMetaData video={video} videoId={id} />
          ) : (
            <h6>Loading... </h6>
          )}

          <Comments />
        </div>
      </Col>
      <Col lg={4}>
        {[...Array(10)].map((_, id) => (
          <VideoHorizontal key={id} />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
