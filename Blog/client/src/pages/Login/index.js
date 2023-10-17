import React from 'react';
import './login.css';
import LoginFormComponent from './LoginForm';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function LoginPage(props) {
    return (props.trigger) ? (
        <div className='login-div-wrapper div-popup-wrapper'>
            <div className='login-div-content' style={{position: 'relative', width: '50%', margin: '5rem 25% 0 25%'}}>
                <HighlightOffIcon
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        marginRight: '1rem',
                        marginTop: '1rem',
                        zIndex: '3'
                    }}

                    onClick={() => props.setTrigger(false)}
                />
                <LoginFormComponent></LoginFormComponent>
            </div>
        </div>
    ) : "";
}

export default LoginPage;