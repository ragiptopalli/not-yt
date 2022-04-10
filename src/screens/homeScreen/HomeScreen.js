import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesFilter from "../../components/categoriesFilter/CategoriesFilter";
import VideoComponent from "../../components/videoComponent/VideoComponent";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";
import { SET_ACTIVE_CATEGORY } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";
//import Skeleton from "react-loading-skeleton";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { videoItems, activeCategory, loading } = useSelector(
    (state) => state.homeVideoItems
  );

  const navigate = useNavigate();

  const fetchData = () => {
    console.log("load next page");
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch({
        type: SET_ACTIVE_CATEGORY,
        payload: activeCategory,
      });
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  useEffect(() => {
    if (!accessToken) navigate.push("/auth");
    dispatch(getPopularVideos());
  }, [navigate, dispatch, accessToken]);

  return (
    <Container>
      <CategoriesFilter />
      <InfiniteScroll
        dataLength={videoItems.length}
        next={() => fetchData()}
        hasMore={true}
        className="row"
        oader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        {!loading
          ? videoItems.map((videoItem) => (
              <Col lg={3} md={4} key={videoItem.id?.videoId || videoItem.id}>
                <VideoComponent videoItem={videoItem} />
              </Col>
            ))
          : [...Array(21)].map((_, id) => (
              <Col lg={3} md={4} key={id}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
