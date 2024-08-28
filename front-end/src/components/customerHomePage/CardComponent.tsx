import { Button, Card, Row} from "react-bootstrap";
import { HotelInterface } from "../../interfaces/HotelInterface";
import React from "react";
import HotelDetails from "./HotelDetails";

export const CardComponent: React.FC<any> = (hotels: HotelInterface) => {

  

  return (
    <div className="m-3 shadow " style={{ maxWidth: 250 }}>
      
      <Card bg="light" border="dark">
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Title>{hotels.hotelName}</Card.Title>
          <Card.Text className="">
            {hotels.address} Description Goes Here
          </Card.Text>
          <HotelDetails image={hotels.image} rating={hotels.rating} hotelId={hotels.hotelId} hotelName={hotels.hotelName} address={hotels.address}></HotelDetails>
        </Card.Body>
      </Card>
    </div>
  );
};
