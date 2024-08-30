import { Card, } from "react-bootstrap";
import React from "react";
import HotelDetails from "./HotelDetails";

export const CardComponent: React.FC<any> = (hotel) => {

  return (
    <div className="m-3 shadow-lg rounded" style={{ maxWidth: 280 }}>
      <Card className="h-100 shadow rounded">
        <Card.Img variant="top" src={hotel.image} style={{ height: '200px', objectFit: 'cover' }}/>
        <Card.Body>
          <Card.Title>{hotel.name}</Card.Title>
          <Card.Text>{hotel.address}</Card.Text>
        </Card.Body>
        <HotelDetails
          image={hotel.image}
          rating={hotel.rating}
          hotelId={hotel.hotelId}
          name={hotel.name}
          address={hotel.address}
        ></HotelDetails>
      </Card>
    </div>
  );
};