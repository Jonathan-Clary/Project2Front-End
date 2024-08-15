import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CardComponent } from "./CardComponent";
import { HotelInterface } from "../../interfaces/HotelInterface";
import Pagination from 'react-bootstrap/Pagination';

export const CustomerHomePage: React.FC = () => {
  return (
    <div className="Page">
      <div className="NavBar">
        <p>Insert Nav Bar here</p>
      </div>
      <p>Space</p>
      <div className="Search">
        <p>Search Bar Here</p>
        <p>Search Results Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center">
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
        </Container>
      </div>
      <div className="Trending ">
        <p>Trending Hotels Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center overflow-auto">
          <Carousel variant="dark">
            <CarouselItem className="d-flex">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <div className="Favorites">
        <p>Favorite / Saved Hotels Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center">
        <Carousel variant="dark">
            <CarouselItem className="d-flex">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <p>Space</p>
      <div className="Footer">
        <p>
          <footer>Insert Footer Here</footer>
        </p>
      </div>
    </div>
  );
};
