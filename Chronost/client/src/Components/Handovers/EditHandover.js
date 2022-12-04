import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_BASE = "http://localhost:5000";

function EditHandover() {
    const { id } = useParams();
    const [handoverinfo, setHandoverInfo] = useState([]);

    const getHandoverData = async () => {
        axios.get(`${API_BASE}/handovers/${id}`)
        .then((res) => {
            setHandoverInfo(res.data);
        })
    }

    useEffect(() => {
        getHandoverData();
    }, []);

    return(
        <div>
            <h1>Sample Edit Handover page</h1>
            <h1>ID of this article is: {id}</h1>
            <h1>Name of this article is: {handoverinfo.severity}</h1>
        </div>
    );
}

export default EditHandover;