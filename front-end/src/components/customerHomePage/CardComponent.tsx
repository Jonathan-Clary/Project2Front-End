import { Button, Card} from "react-bootstrap";
import { HotelInterface } from "../../interfaces/HotelInterface";
import React from "react";
import HotelDetails from "./HotelDetails";

export const CardComponent: React.FC<any> = (hotels: HotelInterface) => {

  

  return (
    <div className="m-3 shadow">
      <Card bg="light" border="dark">
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Title>{hotels.hotelName} Name Goes Here</Card.Title>
          <Card.Text>
            {hotels.hotelId} Description goes here
          </Card.Text>
          <HotelDetails hotelId={hotels.hotelId} hotelName={hotels.hotelName}></HotelDetails>
        </Card.Body>
      </Card>
    </div>
  );
};
