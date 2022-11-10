import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function MeetingComponent(props) {
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
                        <h1>Username</h1>
                        <h1>Date</h1>
                    </div>
                </div>
            </div>
        </div>
    ) : "";

};

export default MeetingComponent;