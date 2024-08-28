import {
  Carousel,
  CarouselItem,
  Col,
  Container,
  Dropdown,
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
import { SearchBarComponent } from "./SearchBarComponent";

export const CustomerHomePage: React.FC = () => {
  
  
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const [data, setData] = useState<HotelInterface[]>([]);
  
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
        <SearchBarComponent/>
        
        
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
