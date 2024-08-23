import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../navigation/Navigation.css"
import { useAuth } from "../../contexts/AuthContext"
export const Navigation: React.FC = () => {
    const navigate = useNavigate()
    const { logout } = useAuth();

    return (
        <Navbar expand="lg" className="bg-primary">
          <Container className="d-flex justify-content-between">
            {/* Logo on the left */}
            <Navbar.Brand className="navLogo" onClick={() => navigate('/')}>
              Logo 
            </Navbar.Brand>
    
            {/* This is for smaller screens */}
            <NavDropdown
              title={<i className="bi bi-person-circle fs-1"></i>} 
              id="basic-nav-dropdown"
              className="d-lg-none ms-auto no-arrow" //This is bootstrap for dropdowns that are only visible on screens sizes smaller than 992ppx
              align="end"
            >
                <NavDropdown.Item onClick={() => navigate("/")}>
                    <i className="bi bi-heart me-2 fs-3"></i>
                    <span className="fs-5">Favorites</span>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/booking/history")}>
                    <i className="bi bi-calendar-event fs-3 me-2"></i>
                    <span className="fs-5">Bookings</span>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                    <i className="bi bi-person-circle fs-3 me-2"></i>
                    <span className="fs-5">Profile</span>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <i className="bi bi-headset fs-3 me-2"></i>
                    <span className="fs-5">Help and Support</span>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                    <i className="bi bi-box-arrow-in-left fs-3 me-2"></i>
                    <span className="fs-5">Log Out</span>
                </NavDropdown.Item>
            </NavDropdown>
    
            {/* This is for  larger screens */}
            <div className="d-none d-lg-flex">
              <Nav className="ms-auto text-end">
                <Nav.Link  className="me-3" onClick={() => navigate("/")}>
                  <i className="bi bi-heart fs-4 me-2"></i>
                  <span className="fs-5">Favorite</span>  
                </Nav.Link>
                <NavDropdown
                  title={
                    <>
                      <i className="bi bi-person-circle fs-4 me-2"></i>
                      <span className="fs-5">Username</span>
                    </>
                  } 
                  id="basic-nav-dropdown" className="no-arrow ms-5"
                >
                  <NavDropdown.Item onClick={() => navigate("/booking/history")}>
                    <i className="bi bi-calendar-event me-2"></i>
                    Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/profile")}>
                    <i className="bi bi-person-circle me-2"></i>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <i className="bi bi-headset me-2"></i>
                    Help and Support
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    <i className="bi bi-box-arrow-in-left me-2"></i>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </Container>
        </Navbar>
      )
}