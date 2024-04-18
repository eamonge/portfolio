import { Button } from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

function AgregarRestauranteComponent(props) {
    const handleClose = () => {
        let message = "¿Deseas cerrar la ventana? ¡Perderás todos los datos!";

        if (window.confirm(message) == true) {
            props.setTrigger(false);
        }
    };

    return (props.trigger) ? (
        <div className='addmodalBackdrop'>
            <div className='addmodalContent'>
                <Button variant="text" className='exitBtnModal'>
                    <CancelIcon />
                </Button>
                <h1>Agregar restaurante</h1>
                <form>
                    <Button variant="contained" className='btnModal'>Agregar restaurante</Button>
                    <Button variant="contained" className='btnModal btnModalCancel' onClick={handleClose}>Cancelar</Button>
                </form>
            </div>
        </div>
    ) : "";
};

export default AgregarRestauranteComponent;