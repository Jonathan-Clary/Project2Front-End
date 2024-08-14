import { Button, Card } from "react-bootstrap";
import { HotelInterface } from "../../interfaces/HotelInterface";

export const CardComponent: React.FC<any> = (hotels: HotelInterface) => {

  return (
    <div className="m-3 shadow">
      <Card bg="light" border="dark">
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Title>{hotels.hotelName}</Card.Title>
          <Card.Text>
            {hotels.hotelId}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
