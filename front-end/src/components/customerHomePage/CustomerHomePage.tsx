import { Carousel, CarouselItem, Container, Spinner} from "react-bootstrap";
import { CardComponent } from "./CardComponent";
import { HotelInterface } from "../../interfaces/HotelInterface";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import createAxiosInstance from "../../services/AxiosInstance";
import { SearchBarComponent } from "./SearchBarComponent";
import { FavoriteInterface } from "../../interfaces/FavoriteInterface";
import './CustomerHomePage.css'
export const CustomerHomePage: React.FC = () => {



  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const [data, setData] = useState<HotelInterface[]>([]);
  const [favorites, setFavorites] = useState<FavoriteInterface[]>([]);

  const [loading, setLoading] = useState();

  const getFavorites = async () => {
    try {
      const response = await axiosInstance.get(
        "/favorites/hotel/user/" + user?.userId
      );
      console.log(response.data)
      console.log(user?.userId)
      setFavorites(response.data)

    } catch (error) {
      console.log('Error fetching hotel favorites', error)

    }
  };

  // const getData = async () => {
  //   setData(mockData);
  // };
  useEffect(() => {
    getFavorites()

  }, [])
  return (
    <Container>
      <section>
        <h2>Where is your Destination?</h2>
      </section>
      <Container>
        <SearchBarComponent />
      </Container>
      <div className="Trending">

        <Container className="d-flex flex-fill flex-wrap justify-content-center">
          <Carousel variant="dark">
            <CarouselItem className="d-flex">

            </CarouselItem>
          </Carousel>
        </Container>
      </div>

      
        <Container className="d-flex justify-content-center fav-container">
            <Container fluid className="p-0">
              <Carousel variant="dark" className="">
                {favorites.map((hotels, index) => (
                  <CarouselItem key={index}  style={{ height: '500px' }}>
                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                      <CardComponent {...hotels}></CardComponent>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </Container>
        
        </Container>
    
    </Container>
  );
};
