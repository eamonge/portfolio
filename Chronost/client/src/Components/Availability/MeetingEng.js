import React, { useState, useEffect } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const API_BASE = "http://localhost:5000";

function MeetingComponent(props) {

    var status = "Meeting";
    const [engineers, setEngineers] = useState([]);

    const GetEngineers = async () => {
        fetch(`${API_BASE}/auth/status/${status}`)
        .then(res => res.json())
        .then(data => setEngineers(data))
        .catch(err => console.log(`Error: ${err}`))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            GetEngineers();
        }, 15000);
        return () => clearInterval(interval);
    }, []);

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
                    <h1 style={{ color: '#D3D3D3' }}>In-Meeting Engineers</h1>
                </div>
                <hr />
                <div className='contentavail_div'>
                    <div className='casesdiv'>
                        {engineers.map(eng => (
                            <div>
                                <h1>{eng.first_name} {eng.last_name}</h1>
                                <h1>{eng.statusModified}</h1>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    ) : "";

};

export default MeetingComponent;