import React, { useState, useEffect } from 'react';
// import Handove
import HandoverListComponent from './HandoverList';
import HandoverNoneComponent from './HandoverNone';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { IoTrashBinSharp, IoPencil } from "react-icons/io5";
import './Handover.css';
import Button from 'react-bootstrap/Button';
import CreateHndvrComponent from './CreateHandover';

const API_BASE = "http://localhost:5000";
// import Hando

function HandoverComponent() {

    const [handovers, setHandovers] = useState([]);
    const [createHandover, setCreateHandover] = useState(false);

    const redirectOnClick = async id => {
        window.location.href= `/edit-handover/${id}`;
    }

    const GetHandovers = () => {
        fetch(API_BASE + "/handovers")
            .then(res => res.json())
            .then(data => setHandovers(data))
            .catch(err => console.log("Error: ", err))
    }

    const DeleteHandover = async id => {
        const data = await fetch(API_BASE + "/handovers/" + id, {
            method:
                "DELETE"
        }).then(res => res.json());
        GetHandovers();
    }

    useEffect(() => {
        GetHandovers();
    }, []);

    return handovers.length > 0 ?
        <div>
            <h1>Handovers</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SR</th>
                        <th>Severity</th>
                        <th>Type</th>
                        <th>Handover Justification</th>
                        <th>Next steps</th>
                        <th>Subteam</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        handovers.map(hndvr => (
                            <tr>
                                <td>{hndvr._id}</td>
                                <td>{hndvr.severity}</td>
                                <td>{hndvr.type}</td>
                                <td>{hndvr.handover_justification}</td>
                                <td>{hndvr.next_steps}</td>
                                <td>{hndvr.subteam}</td>
                                <td> <Link to={'/edit-handover/'+`${hndvr._id}`} ><Button><IoPencil size={20} /></Button></Link> </td>
                                <td> <Button onClick={() => { DeleteHandover(hndvr._id) }}><IoTrashBinSharp size={20} /></Button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button onClick={() => setCreateHandover(true)} id='btnAddHandover'>Add Handover</Button>
            <CreateHndvrComponent trigger={createHandover} setTrigger={setCreateHandover} />
        </div>
        :
        <div>
            <div>
                <h1>
                    No Handover due!
                </h1>
                <Button onClick={() => setCreateHandover(true)} id='btnAddHandover'>Add Handover</Button>
                <CreateHndvrComponent trigger={createHandover} setTrigger={setCreateHandover}/>
            </div>
        </div>
        // <HandoverNoneComponent handovers={handovers} />
}

export default HandoverComponent;

/* 

*/