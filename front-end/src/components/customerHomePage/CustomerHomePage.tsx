import { Carousel } from "react-bootstrap";
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
    }
]

export const CustomerHomePage: React.FC = () => {

    const e = [];

    for (let i = 0; i < 6; i++) {
        mockData.map((data, index) =>{
            
        })
        e.push(<CardComponent  key={i} />);
        
    }

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
          <div className="d-flex bg-danger ">
            {e}
          </div>
        </p>
      </div>
      <div>
        <p>Trending Hotels Here
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
