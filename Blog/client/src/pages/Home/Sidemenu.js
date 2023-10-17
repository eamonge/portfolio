import React from 'react';
import './index.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Grid from '@mui/material/Unstable_Grid2';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function SidenavComponent(props) {
    return (props.trigger) ? (
        <div className='sidenav-wrapper div-popup-wrapper'>
            <div className='sidenav-content'>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <div className='sidenav-content-header' style={{ position: 'relative' }}>
                            <HighlightOffIcon
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    marginRight: '1rem'
                                }}
                                className='btn-close-sidemenu'
                                onClick={() => props.setTrigger(false)}
                            />
                            <h1>Hello user</h1>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className='sidenav-content-body'>
                            <ul className='item-list'>
                                <div className='item-list-itemDiv'>
                                    <li>Profile</li>
                                </div>
                                <div className='item-list-itemDiv'>
                                    <li>Settings</li>
                                </div>
                                <div className='item-list-itemDiv'>
                                    <li>Stats</li>
                                </div>
                                <div className='item-list-itemDiv'>
                                    <li>Blog posting</li>
                                </div>
                                <div className='item-list-itemDiv'>
                                    <li>Logout</li>
                                </div>
                            </ul>

                            <div style={{
                                position: 'absolute',
                                bottom: '1rem'
                                }}>
                                <li style={{
                                    listStyleType: 'none',
                                    fontWeight: 'lighter'}}>
                                        <CopyrightOutlinedIcon fontSize='12pt' style={{marginRight: '5px'}}/>
                                        ElmoNiversity Developer
                                </li>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    ) : "";
};

export default SidenavComponent;
