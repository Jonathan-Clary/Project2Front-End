import React from 'react';
import './App.css';
import { Temp } from './components/Temp';
import UserProfile from './components/user/profile/UserProfile';
import { Col, Container, Row } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">

     {/* <h1>TESTING BOOTSTRAP</h1>
     <Temp></Temp> */}



    <Container fluid className='mt-5'>
        <Row className='d-flex justify-content-center align-items-start'>
          <Col xs={10} style={{padding:0}} className='d-flex justify-content-center align-items-start'>
            { /** Rendered page automatically goes here */  }
            <div className='d-flex flex-column align-items-center justify-content-start' style={{margin: 0, padding: 0 }}>
            <UserProfile />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
