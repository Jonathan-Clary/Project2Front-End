import { Card, } from "react-bootstrap";
import React from "react";
import HotelDetails from "./HotelDetails";
import { FavoriteInterface } from "../../interfaces/FavoriteInterface";

export const CardComponent: React.FC<any> = (hotel) => {

  return (
    <>
    <div className=" m-3 shadow" style={{ maxWidth: 250 }}>
      
      <Card bg="light" border="dark" className="h-100">
        <Card.Img variant="top" src={hotel.image}  />
        <Card.Body>
          <Card.Title>{hotel.name}</Card.Title>
          <Card.Text className="">
            {hotel.address}
          </Card.Text>
          
          
          
        </Card.Body>
        <HotelDetails image={hotel.image} rating={hotel.rating} hotelId={hotel.hotelId} name={hotel.name} address={hotel.address}></HotelDetails>
        
      </Card>
    </div>
    
    </>
  );
};
