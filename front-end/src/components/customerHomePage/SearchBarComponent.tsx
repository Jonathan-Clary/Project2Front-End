import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { HotelInterface } from "../../interfaces/HotelInterface";
import createAxiosInstance from "../../services/AxiosInstance";
import { Button, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from "react-bootstrap";
import { CardComponent } from "./CardComponent";


export const SearchBarComponent: React.FC = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [stateFilter, setStateFilter] = useState<string>("");
  const [hotels, setHotels] = useState<HotelInterface[]>([]);
  const { user, token } = useAuth();
  const axiosInstance = createAxiosInstance(token);

  const stateOptions = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'DC', name: 'District of Columbia' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' }
  ];

  const getHotels = async () => {
    console.log(state)
    console.log(city)
    const response = await axiosInstance.get("/hotels/" + city + "+" + state);
    setHotels(response.data);
    console.log(user?.userId);
    console.log(token);
    console.log(response.data);

  };

  const filterDropdownItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.dropdown-item');
    items.forEach(item => {
      const text = (item as HTMLElement).textContent?.toLowerCase() || '';
      (item as HTMLElement).style.display = text.startsWith(value) ? 'block' : 'none';
    });
  };

  return (
    <>
      <div>
        <Container className="d-flex justify-content-center align-items-center mb-3 mt-5 p-4">
          <Row className="w-100">
            <Col xs={9}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="City">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control placeholder="City" aria-label="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <Button onClick={getHotels}>Go!</Button>
              </InputGroup>
            </Col>

            <Col xs={3}>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components" className="custom-toggle">
                  {stateOptions.find(option => option.code === state)?.name || 'Select State'}
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-menu">
                  <Form.Control
                    autoFocus
                    className="filter-input"
                    placeholder="Type to filter..."
                    onChange={filterDropdownItems} />
                  {stateOptions.map(({ code, name }) => (
                    <Dropdown.Item
                      key={code}
                      onClick={() => { setState(code); setStateFilter(""); }}>
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <Container className="d-flex flex-wrap justify-content-center mt-2">
          {hotels.map((hotels, index) => (
            <CardComponent {...hotels} className=""></CardComponent>
          ))}
        </Container>
      </footer>
    </>
  );
};
