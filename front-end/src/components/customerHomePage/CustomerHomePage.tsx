import {
  Carousel,
  CarouselItem,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CardComponent } from "./CardComponent";
import { HotelInterface } from "../../interfaces/HotelInterface";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";

export const CustomerHomePage: React.FC = () => {
  const [data, setData] = useState<HotelInterface[]>([]);
  const [hotels, setHotels] = useState<HotelInterface[]>([]);
  const getHotels = async () => {
    const response = await axios.get(
      " http://44.211.44.18:8080/api/hotels/fetch-by-city"
    );
    setHotels(response.data);
  };
  const [favorites, setFavorites] = useState<HotelInterface[]>([]);
  const getFavorites = async () => {
    const response = await axios.get(
      " http://localhost:8080/favorite"
    );
    setFavorites(response.data)
  };
  const getData = async () => {
    setData(mockData);
  };

  return (
    <div className="Page">
      <div className="NavBar">
        <p>Insert Nav Bar here</p>
      </div>
      <p>Space</p>
      <div className="Search">
        <p>Search Bar Here</p>
        <button onClick={getData}>Go!</button>
        <p>Search Results Here</p>
        <Container className="d-flex flex-fill bg-primary justify-content-center">
          {data.map((hotels, index) => (
            <CardComponent {...hotels} className="w-25"></CardComponent>
          ))}
        </Container>
      </div>
      <div className="Trending overflow-auto">
        <p>Trending Hotels Here</p>
        <Container className="d-flex flex-fill flex-wrap  justify-content-center bg-primary ">
          <Carousel variant="dark">
            <CarouselItem className="d-flex">
            {favorites.map((hotels, index) => (
            <CardComponent {...hotels} className="w-25"></CardComponent>
          ))}
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <div className="UsersFavorites">
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
        <footer>Insert Footer Here</footer>
      </div>
    </div>
  );
};
