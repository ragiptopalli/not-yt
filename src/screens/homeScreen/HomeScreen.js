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
//import Skeleton from "react-loading-skeleton";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videoItems, activeCategory, loading } = useSelector(
    (state) => state.homeVideoItems
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesFilter />
      <InfiniteScroll
        dataLength={videoItems.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videoItems.map((videoItem) => (
              <Col lg={3} md={4} key={videoItem.id}>
                <VideoComponent videoItem={videoItem} key={videoItem.id} />
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
