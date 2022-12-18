import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import AvailableComponent from '../Availability/AvailableEng';
import OfflineComponent from '../Availability/OfflineEng';
import BreakComponent from '../Availability/BreakEng';
import LunchComponent from '../Availability/LunchEng';
import MeetingComponent from '../Availability/MeetingEng';
import OtherComponent from '../Availability/OtherEng';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
const API_BASE = "http://localhost:5000";
const WAITTIME = 5000;

function LandingComponent() {
    var storedemail = localStorage.getItem("email");
    const [offline, setOffline] = useState(false);
    const [available, setAvailable] = useState(false);
    const [recess, setRecess] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [meeting, setMeeting] = useState(false);
    const [other, setOther] = useState(false);
    const [currentStatus, setCurrentStatus] = useState("");

    const [userdata, setUserData] = useState([]);
    const [dmData, setDMData] = useState([]);

    //Get all information based on email of Cx
    const getData = async () => {
        axios.get(`${API_BASE}/auth/${storedemail}`)
            .then((res) => {
                setUserData(res.data)
            })
    }

    //Get all users with DM role
    const getDMs = async () => {
        axios.get(`${API_BASE}/auth/user/DM`)
            .then((res) => {
                setDMData(res.data)
            })
    }

    useEffect(() => {
        getData();
        getDMs();
        const interval = setInterval(() => {
            getData();
            getDMs();
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    //Update user status
    const updateStatus = async (emaill, status) => {
        const data = await fetch(`${API_BASE}/auth/statuspatch/${emaill}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: status
            })
        })
            .then(res => res.json());

        window.alert('Status updated successfully!');
    }

    const test = (val) => {
        console.log(val)
    }

    return (
        <div className='contentdiv'>
            <h1 style={{ textAlign: 'center' }}>Welcome {userdata.first_name} {userdata.last_name}</h1>
            {/* <h1 style={{ textAlign: 'center' }}>Current status after selection is: {currentStatus}</h1> */}
            <h1 style={{ textAlign: 'center' }}>Current status is: {userdata.status}
                <Form.Select aria-label="Default select example" onChange={e => { updateStatus(userdata.email, e.target.value) }}>
                    <option>{userdata.status}</option>
                    <option value="Offline" disabled>Offline</option>
                    <option value="Online">Online</option>
                    <option value="Break">Break</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Others">Others</option>
                </Form.Select>
            </h1>
            <div id='dmdiv' className='landingContentdvs'>
                <h3>Available DMs</h3>
                <hr />
                {dmData.map(dms => (
                    <div className='casesdiv'>
                        <h1>{dms.first_name} {dms.last_name}</h1>
                        <h1>{dms.status}</h1>
                        <br />
                        <br />
                        <br />
                    </div>
                ))}
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
            <OfflineComponent trigger={offline} setTrigger={setOffline} />
            <BreakComponent trigger={recess} setTrigger={setRecess} />
            <LunchComponent trigger={lunch} setTrigger={setLunch} />
            <MeetingComponent trigger={meeting} setTrigger={setMeeting} />
            <OtherComponent trigger={other} setTrigger={setOther} />

        </div>
    );
};

export default LandingComponent;