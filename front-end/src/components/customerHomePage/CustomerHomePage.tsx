import { Carousel, CarouselItem, Col, Container, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CardComponent } from "./CardComponent";
import { HotelInterface } from "../../interfaces/HotelInterface";
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import { useEffect, useState } from "react";

export const CustomerHomePage: React.FC = () => {

const [hotels, setHotels] = useState<HotelInterface[]>([])
  const getHotels = async () =>{
  const response = await axios.get("localhost:8080/api/hotels/fetch-by-city")
  setHotels(response.data)
}

  return (
    <div className="Page">
      <div className="NavBar">
        <p>Insert Nav Bar here</p>
      </div>
      <p>Space</p>
      <div className="Search">
        <p>Search Bar Here</p>
        <button onClick={getHotels}>Go!</button>
        <p>Search Results Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center">
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
        </Container>
      </div>
      <div className="Trending overflow-auto">
        <p>Trending Hotels Here</p>
        <Container className="d-flex flex-fill flex-wrap  justify-content-center bg-primary ">
          <Carousel variant="dark">
            <CarouselItem className="d-flex">
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <div className="Favorites">
        <p>Favorite / Saved Hotels Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center">
        <Carousel variant="dark">
            <CarouselItem className="d-flex">
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <p>Space</p>
      <div className="Footer bg-info">
        <p>
          <footer>Insert Footer Here</footer>
        </p>
        <Container fluid className="bg-primary">
        <Carousel variant="dark">
            <CarouselItem className="d-flex">
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
    </div>
  );
};
