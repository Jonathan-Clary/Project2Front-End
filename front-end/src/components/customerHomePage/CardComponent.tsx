import { Card, } from "react-bootstrap";
import React from "react";
import HotelDetails from "./HotelDetails";
import { FavoriteInterface } from "../../interfaces/FavoriteInterface";

export const CardComponent: React.FC<any> = (hotels: FavoriteInterface) => {

  return (
    <>
    <div className=" m-3 shadow" style={{ maxWidth: 250 }}>
      
      <Card bg="light" border="dark">
        <Card.Img variant="top" src={hotels.hotel.image}  />
        <Card.Body>
          <Card.Title>{hotels.hotel.name}</Card.Title>
          <Card.Text className="">
            {hotels.hotel.address}
          </Card.Text>
          <HotelDetails image={hotels.hotel.image} rating={hotels.hotel.rating} hotelId={hotels.hotel.hotelId} name={hotels.hotel.name} address={hotels.hotel.address}></HotelDetails>
          
          
        </Card.Body>
       
        
      </Card>
    </div>
    
    </>
  );
};
