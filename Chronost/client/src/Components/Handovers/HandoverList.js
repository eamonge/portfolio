// import React, { useState, useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import { IoTrashBinSharp, IoPencil } from "react-icons/io5";
// import './Handover.css';
// import Button from 'react-bootstrap/Button';

// const API_BASE = "http://localhost:5000";

// function HandoverListComponent(props) {
//     const handovers = props.handovers;

//     const [dataHndvr, setDataHndvr] = useState([]);


//     const GetHandovers = () => {
//         fetch(API_BASE + "/handovers")
//             .then(res => res.json())
//             .then(data => setDataHndvr(data))
//             .catch(err => console.log("Error: ", err))
//     }

//     useEffect(() => {
//         GetHandovers();
//     }, []);

//     return dataHndvr.length > 0 ?
        
//         :

        

//     // return (
    
//     // );
// }

// export default HandoverListComponent;