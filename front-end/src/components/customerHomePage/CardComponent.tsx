import { Button, Card, Row} from "react-bootstrap";
import { HotelInterface } from "../../interfaces/HotelInterface";
import React from "react";
import HotelDetails from "./HotelDetails";

export const CardComponent: React.FC<any> = (hotels: HotelInterface) => {

  

  return (
    <div className="m-3 shadow " style={{ maxWidth: 250 }}>
      
      <Card bg="light" border="dark">
        <Card.Img variant="top" src={hotels.image}  />
        <Card.Body>
          <Card.Title>{hotels.name}</Card.Title>
          <Card.Text className="">
            {hotels.address}
          </Card.Text>
          <HotelDetails image={hotels.image} rating={hotels.rating} hotelId={hotels.hotelId} name={hotels.name} address={hotels.address}></HotelDetails>
        </Card.Body>
      </Card>
    </div>
  );
};
