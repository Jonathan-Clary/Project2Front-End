import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { HotelInterface } from "../../interfaces/HotelInterface";
import createAxiosInstance from "../../services/AxiosInstance";
import { Container } from "react-bootstrap";
import { CardComponent } from "./CardComponent";

export const SearchBarComponent: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("AL");
  const [hotels, setHotels] = useState<HotelInterface[]>([]);
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);
  const getHotels = async () => {
    console.log(state)
    console.log(city)
    const response = await axiosInstance.get("/hotels/" + { city } + { state });
    setHotels(response.data);
    console.log(user?.userId);
    console.log(token);
    console.log(response.data);
    
  };

  return (
    <div>
      <input type="search" placeholder="City" onChange={e => setCity(e.target.value)}/>
      <select value={state} onChange={e => setState(e.target.value)}>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <button onClick={getHotels}>Go!</button>

      <p>Search Results Here</p>
      <Container className="d-flex flex-wrap bg-primary justify-content-center">
        {hotels.map((hotels, index) => (
          <CardComponent {...hotels} className="w-25"></CardComponent>
        ))}
      </Container>
    </div>
  );
};
