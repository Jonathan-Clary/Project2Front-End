import { Carousel, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CardComponent } from "./CardComponent";
import { HotelInterface } from "../../interfaces/HotelInterface";

const mockData: HotelInterface[] =[
    {
        hotelId:1,
        hotelName:"Hotel1"
    },
    {
        hotelId:2,
        hotelName:"Hotel2"
    },
    {
        hotelId:3,
        hotelName:"Hotel3"
    },
    {
        hotelId:4,
        hotelName:"Hotel4"
    },
    {
        hotelId:5,
        hotelName:"Hotel5"
    },
    {
        hotelId:6,
        hotelName:"Hotel6"
    },
    {
        hotelId:1,
        hotelName:"Hotel21"
    },
    {
        hotelId:2,
        hotelName:"Hotel22"
    },
    {
        hotelId:3,
        hotelName:"Hotel23"
    },
    {
        hotelId:4,
        hotelName:"Hotel24"
    },
    {
        hotelId:5,
        hotelName:"Hotel25"
    },
    {
        hotelId:6,
        hotelName:"Hotel26"
    },
    {
        hotelId:1,
        hotelName:"Hotel31"
    },
    {
        hotelId:2,
        hotelName:"Hotel32"
    },
    {
        hotelId:3,
        hotelName:"Hotel33"
    },
    {
        hotelId:4,
        hotelName:"Hotel34"
    },
    {
        hotelId:5,
        hotelName:"Hotel35"
    },
    {
        hotelId:6,
        hotelName:"Hotel36"
    },
    {
        hotelId:1,
        hotelName:"Hotel41"
    },
    {
        hotelId:2,
        hotelName:"Hotel42"
    },
    {
        hotelId:3,
        hotelName:"Hotel43"
    },
    {
        hotelId:4,
        hotelName:"Hotel44"
    },
    {
        hotelId:5,
        hotelName:"Hotel45"
    },
    {
        hotelId:6,
        hotelName:"Hotel46"
    }
]

export const CustomerHomePage: React.FC = () => {

    

    

  return (
    <div>
      <div>
        <p>Insert Nav Bar here</p>
      </div>
      <p>Space</p>
      <div className=" bg-primary overflow-auto">
        <p>Search Bar Here</p>
        <p>
          Search Results Here
          
          <div className="d-flex bg-danger justify-content-center">
            {mockData.map((hotel) =>(
                <CardComponent key={hotel.hotelId} {...hotel}></CardComponent>
            ))}
          </div>
        </p>
      </div>
      <div className="bg-primary overflow-auto">
        <p>Trending Hotels Here
        <Carousel fade={true} controls={true} interval={null} variant="dark"className="bg-danger">
            <Carousel.Item className="d-flex col-5 justify-content-center bg-secondary">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </Carousel.Item>
            <Carousel.Item className="d-flex col-5 justify-content-center">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </Carousel.Item>
          </Carousel>
        </p>
      </div>
      <div>
        <p>Favorite / Saved Hotels Here
        <Carousel fade={true} controls={true} interval={null} variant="dark">
            <Carousel.Item className="d-flex col-5 justify-content-center">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </Carousel.Item>
            <Carousel.Item className="d-flex col-5 justify-content-center">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </Carousel.Item>
            <Carousel.Item className="d-flex col-5 justify-content-center">
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </Carousel.Item>
          </Carousel>
        </p>
      </div>
      <p>Space</p>
      <div>
        <p>
          <footer>Insert Footer Here</footer>
        </p>
      </div>
    </div>
  );
};
