import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function AssignedSrsComp() {
    const [type, setType] = React.useState('');
  
    const handleChange = (event) => {
      setType(event.target.value);
    };

    const [cases, setCases] = useState(0);
    const [collabs, setCollabs] = useState(0);
    const [followups, setFollowUps] = useState(0);

    const addAssignation = () => {
        switch(type) {
            case 'Case':
                var sumCases = setCases(cases + 1);
                return sumCases;
            case 'Collab':
                var sumCollabs = setCollabs(collabs + 1);
                return sumCollabs;
            case 'Follow up':
                var sumFUS = setFollowUps(followups + 1)
                return sumFUS;
            default:
                return 0;
        }
    }

    return (
        <div className='assigned-sr-container content-div'>
            <h1>Assigned SRs</h1>
            <div className='sr-typdiv'>
                <Typography variant="h6" className='typNum'>
                    <span>
                        Cases <span className='numSpan'>{cases}</span>
                    </span>
                </Typography>
                <Typography variant="h6" className='typNum'>
                    <span>
                        Collabs <span className='numSpan'>{collabs}</span>
                    </span>
                </Typography>
                <Typography variant="h6" className='typNum'>
                    <span>
                        Follow ups <span className='numSpan'>{followups}</span>
                    </span>
                </Typography>
            </div>
        </div>
    );
};

export default AssignedSrsComp;