import React from 'react'
import '../styles/register.css';
import Typography from '@mui/material/Typography';
import { navigationRoute } from '../utils/navigationUtil';

const Register = () => {
    return (
        <div className='backModal-login'>
            <div className="contentModal registerModal">
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                <hr />
                <form>
                    <input placeholder='Primer nombre'/>
                    <br />
                    <input placeholder='Segundo nombre'/>
                    <br />
                    <input placeholder='Primer apellido'/>
                    <br />
                    <input placeholder='Segundo apellido'/>
                    <br />
                    <input placeholder='Correo'/>
                    <br />
                    <input placeholder='Contraseña'/>
                    <br />
                    <input placeholder='Confirmar contraseña'/>
                    <br />
                    <label>Fecha nacimiento</label>
                    <br />
                    <input placeholder='Fecha nacimiento' type='date'/>
                    <br />
                    <input placeholder='Restaurante'/>
                    <br />
                    <button
                        className='btnCancel'
                        type='button'
                        onClick={() => navigationRoute("/") }
                    >
                        Cancelar
                    </button>
                    <button
                        className='btnApprove'
                        type='button'
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register