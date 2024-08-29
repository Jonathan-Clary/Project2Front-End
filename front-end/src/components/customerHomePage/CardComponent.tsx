import { Card, } from "react-bootstrap";
import React from "react";
import HotelDetails from "./HotelDetails";
import { FavoriteInterface } from "../../interfaces/FavoriteInterface";

export const CardComponent: React.FC<any> = (hotel) => {

  return ( 
    <div className="m-3" style={{maxWidth: 250}} >
      <Card border="dark" className="h-100 shadow">
        <Card.Img variant="top" src={hotel.image} style={{height: '200px', objectFit: 'cover'}} />
        <Card.Body className="">
          <Card.Title>{hotel.name}</Card.Title>
          <Card.Text className="">
            {hotel.address}
          </Card.Text>
        </Card.Body>
        <HotelDetails image={hotel.image} rating={hotel.rating} hotelId={hotel.hotelId} name={hotel.name} address={hotel.address}></HotelDetails>
      </Card>
    </div>

  );
};