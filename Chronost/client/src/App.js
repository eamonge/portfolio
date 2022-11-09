import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './Components/Navbar/NavBarComponent';
import HomeComponent from './Components/Home/Home';
import LandingComponent from './Components/Landing/Landing';
import HandoverComponent from './Components/Handovers/Handovers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import H


function App() {
  const [landing, setLanding] = useState(true);

  return (
    <div className="App">
      <Container fluid>
        {/* <Row>
          <Col>
            <NavbarComponent />
            <HomeComponent trigger={landing} setTrigger={setLanding}/>
          </Col>
        </Row> */}
        <Row>
          <Col>
                <NavbarComponent></NavbarComponent>
          </Col>
        </Row>
        <Row>
          <Col className='contentCol'>
            <Routes>
              <Route exact path='/' element={<HomeComponent />} />
              <Route path='/main' element={<LandingComponent />} />
              <Route path='/handovers' element={<HandoverComponent />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
