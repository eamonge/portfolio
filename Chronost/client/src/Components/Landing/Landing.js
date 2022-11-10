import React, { useState } from 'react';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import AvailableComponent from '../Availability/AvailableEng';
import OfflineComponent from '../Availability/OfflineEng';
import BreakComponent from '../Availability/BreakEng';
import LunchComponent from '../Availability/LunchEng';
import MeetingComponent from '../Availability/MeetingEng';
import OtherComponent from '../Availability/OtherEng';

function LandingComponent() {
    var username = localStorage.getItem("name");
    const [offline, setOffline] = useState(false);
    const [available, setAvailable] = useState(false);
    const [recess, setRecess] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [meeting, setMeeting] = useState(false);
    const [other, setOther] = useState(false);

    return (
        <div className='contentdiv'>
            <h1 style={{ textAlign: 'center' }}>Welcome {username}</h1>

            <div id='dmdiv' className='landingContentdvs'>
                <h3>Available DMs</h3>
                <hr />
                <div className='casesdiv'>
                    <h1>UsernamDDe</h1>
                    <h1>Status</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='casesdiv'>
                    <h1>UsernamDDe</h1>
                    <h1>Status</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='casesdiv'>
                    <h1>UsernamDDe</h1>
                    <h1>Status</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='casesdiv'>
                    <h1>UsernamDDe</h1>
                    <h1>Status</h1>
                </div>
            </div>

            <div id='casediv' className='landingContentdvs'>
                <h3>Assigned cases</h3>
                <hr />
                <div className='casesdiv'>
                    <h1>Cases</h1>
                    <h1>0</h1>
                </div>
                <div className='casesdiv'>
                    <h1>Collaborations</h1>
                    <h1>0</h1>
                </div>
                <div className='casesdiv'>
                    <h1>Follow-ups</h1>
                    <h1>0</h1>
                </div>
            </div>
            <div id='availdiv' className='landingContentdvs'>
                <h3>Engineer Availability</h3>
                <Button id='Offline' onClick={() => setOffline(true)}>
                    <span>
                        Offline
                    </span>
                </Button>
                <Button id='Online' onClick={() => setAvailable(true)}>
                    <span>
                        Online
                    </span>
                </Button>
                <Button id='Break' onClick={() => setRecess(true)}>
                    <span>
                        Break
                    </span>
                </Button>
                <Button id='Lunch' onClick={() => setLunch(true)}>
                    <span>
                        Lunch
                    </span>
                </Button>
                <Button id='Meeting' onClick={() => setMeeting(true)}>
                    <span>
                        Meeting
                    </span>
                </Button>
                <Button id='Others' onClick={() => setOther(true)}>
                    <span>
                        Others
                    </span>
                </Button>
            </div>
            <AvailableComponent trigger={available} setTrigger={setAvailable} />
            <OfflineComponent trigger={offline} setTrigger={setOffline}/>
            <BreakComponent trigger={recess} setTrigger={setRecess} />
            <LunchComponent trigger={lunch} setTrigger={setLunch} />
            <MeetingComponent trigger={meeting} setTrigger={setMeeting} />
            <OtherComponent trigger={other} setTrigger={setOther} />
        </div>
    );
};

export default LandingComponent;