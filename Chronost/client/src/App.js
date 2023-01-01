import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './Components/Navbar/NavBarComponent';
import HomeComponent from './Components/Home/Home';
import LandingComponent from './Components/Landing/Landing';
import EditHandover from './Components/Handovers/EditHandover';
import HandoverComponent from './Components/Handovers/Handovers';
import TimeoutComponent from './Components/Timeout/TimeoutPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <NavbarComponent></NavbarComponent>
          </Col>
        </Row>
        <Row>
          <Col className='contentCol'>
            <Routes>
              <Route path='/edit-handover/:id' element={<EditHandover />}/>
              <Route path='/handovers' element={loggedIn ? <HandoverComponent /> : <Navigate to='/'/>} />
              <Route path='/timeout' element={<TimeoutComponent />} />
              <Route path='/main' element={<LandingComponent />} />
              <Route exact path='/' element={<HomeComponent />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
