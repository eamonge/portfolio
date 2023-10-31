import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
      <Container fluid>
        {/* Main device */}
        <Row>
          <Col>
            <Device />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
