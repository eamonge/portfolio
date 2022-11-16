import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';

const API_BASE = "http://localhost:5000";

function CreateHndvrComponent(props) {

    const [newSR, setNewSR] = useState("");
    const [newSeverity, setNewSeverity] = useState("");
    const [newType, setNewType] = useState("");
    const [newJustification, setNewJustification] = useState("");
    const [newSteps, setNewSteps] = useState("");
    const [newSubTeam, setNewSubTeam] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newHandover = {
            newSR,
            newSeverity,
            newType,
            newJustification,
            newSteps,
            newSubTeam
        }
    }

    const addHandover = async () => {
        const data = await fetch(API_BASE + "/handovers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                sr: newSR,
                severity: newSeverity,
                type: newType,
                handover_justification: newJustification,
                next_steps: newSteps,
                subteam: newSubTeam
            })
        }).then(res => res.json());
    }


    return (props.trigger) ? (

        <div className='backdrop_availability'>
            <div id='avalilable_diveng' className='availability_contentdiv'>
                <div>
                    {['right'].map((placement) => (
                        <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                    Cerrar
                                </Tooltip>
                            }
                        >
                            <Button onClick={() => props.setTrigger(false)} className='availability_closebtn'><IoCloseCircleOutline size={25} /></Button>
                        </OverlayTrigger>
                    ))}
                    <h1 style={{ color: 'green' }}>Add Handover</h1>
                </div>
                <hr />
                <div className='contentavail_div'>
                    <div className='casesdiv' style={{ padding: '30px' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>SR</Form.Label>
                                <Form.Control type="text" onChange={e => setNewSR(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Severity</Form.Label>
                                <Form.Control type="text" onChange={e => setNewSeverity(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" onChange={e => setNewType(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Handover Justification</Form.Label>
                                <Form.Control type="text" onChange={e => setNewJustification(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Next Steps</Form.Label>
                                <Form.Control type="text" onChange={e => setNewSteps(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Subteam</Form.Label>
                                <Form.Control type="text" onChange={e => setNewSubTeam(e.target.value)}  />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addHandover}>
                                Add handover
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default CreateHndvrComponent;