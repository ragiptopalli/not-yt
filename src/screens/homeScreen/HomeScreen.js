import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesFilter from "../../components/categoriesFilter/CategoriesFilter";
import VideoComponent from "../../components/videoComponent/VideoComponent";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesFilter />
      <Row>
        {[...new Array(18)].map(() => (
          <Col>
            <VideoComponent />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
