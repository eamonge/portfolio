import React, {useState} from 'react';
import './Device.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DisplayComponent from '../display/Display';
import KeyPad from '../keypad/Keypad';

function Device() {
    const [keyValue, setKeyValue] = useState(0);

    return (
        <div className='device-Div'>
            <Container fluid>
                <Row>
                    {/* Displays digits and operation results */}
                    <Col>
                        <DisplayComponent keyValue={keyValue} onKeyValueChange={setKeyValue}/>
                    </Col>
                </Row>
                <Row>
                    {/* Keypad and buttons */}
                    <Col style={{padding: '0!important', margin: '0!important'}}>
                        <KeyPad keyValue={keyValue} onKeyValueChange={setKeyValue}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Device;