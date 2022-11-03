import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './Components/Navbar/NavBarComponent';
import HomeComponent from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <Router>
              <Routes>
                <Route exact path='/' element={<HomeComponent/>}/>
              </Routes>
            </Router>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
