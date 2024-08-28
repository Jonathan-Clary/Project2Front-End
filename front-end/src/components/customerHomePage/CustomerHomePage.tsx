import {
  Carousel,
  CarouselItem,
  Col,
  Container,
  DropdownItemText,
  DropdownMenu,
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
import { useAuth } from "../../contexts/AuthContext";
import createAxiosInstance from "../../services/AxiosInstance";

export const CustomerHomePage: React.FC = () => {
  
  const [city, setCity] = useState<HotelInterface[]>([]);
  const [state, setState] = useState<HotelInterface[]>([]);
  const [data, setData] = useState<HotelInterface[]>([]);
  const [hotels, setHotels] = useState<HotelInterface[]>([]);
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const getHotels = async () => {
    const response = await axiosInstance.get(
      "/hotels/" + {city} + {state}
    );
    setHotels(response.data);
    console.log(user?.userId)
    console.log(token)
    console.log(response.data)
  };
  const [favorites, setFavorites] = useState<HotelInterface[]>([]);
  const getFavorites = async () => {
    const response = await axiosInstance.get(
      "/favorite/user=" + user?.userId 
    );
    console.log(response.data)
    console.log(user?.userId)
    setFavorites(response.data)
  };
  // const getData = async () => {
  //   setData(mockData);
  // };
  useEffect(() => {
    getFavorites()
    
}, [])
  return (
    <div className="Page">
      <div className="Search">
        <p>Search Bar Here</p>
        <input type="search" name="City" id="City" placeholder="City"/><DropdownMenu>State</DropdownMenu><button onClick={getHotels}>Go!</button>
        <p>Search Results Here</p>
        <Container className="d-flex flex-wrap bg-primary justify-content-center">
          {hotels.map((hotels, index) => (
            <CardComponent {...hotels} className="w-25"></CardComponent>
            
          ))}
        </Container>
      </div>
      <div className="Trending overflow-auto">
        <p>Trending Hotels Here</p>
        <Container className="d-flex flex-fill flex-wrap justify-content-center bg-primary ">
          <Carousel variant="dark">
            <CarouselItem className="d-flex">
            
            </CarouselItem>
          </Carousel>
        </Container>
      </div>
      <p>Favorite / Saved Hotels Here</p>
      <div className="d-flex justify-content-center">
        <Container className="bg-primary">
          <Carousel variant="dark">

              {favorites.map((hotels, index) => (
                <CarouselItem key={index} >
                  <div className="d-flex justify-content-center">
                <CardComponent {...hotels}></CardComponent>
                </div>
                </CarouselItem>
              ))}

          </Carousel>
        </Container>
      </div>
    </div>
  );
};
