import { Button } from '@mui/material';
import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AgregarRestauranteComponent(props) {
    const [activo, setActivo] = React.useState("");

    const handleClose = () => {
        let message = "¿Deseas cerrar la ventana? ¡Perderás todos los datos!";

        if (window.confirm(message) == true) {
            props.setTrigger(false);
        }
    };

    const handleChange = (event) => {
        setActivo(event.target.value);
    };

    return (props.trigger) ? (
        <div className='addmodalBackdrop'>
            <div className='addmodalContent'>
                <Button
                    variant="text"
                    className='exitBtnModal'
                    onClick={handleClose}
                    style={{ position: 'absolute', right: '0', color: '#BD3F32'}}
                >
                    <CancelIcon />
                </Button>
                <br />
                <h1 className='componentTitleH1'>Agregar restaurante</h1>
                <form>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                    <TextField id="outlined-basic" label="Especialidad" variant="outlined" />
                    <TextField id="outlined-basic" label="Dirección" variant="outlined" />
                    <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                    <FormControl>
                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Activo</FormLabel> */}
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={activo}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="Activo" control={<Radio />} label="Activo" />
                            <FormControlLabel value="Inactivo" control={<Radio />} label="Inactivo" />
                        </RadioGroup>
                    </FormControl>
                    <br />
                    <br />
                    <Button variant="contained" className='btnModal' style={{backgroundColor: '#85D502', color: '#1F2029'}}>Agregar restaurante</Button>
                    <br />
                    <br />
                    <Button variant="contained" className='btnModal btnModalCancel' onClick={handleClose} style={{backgroundColor: '#CB356B', color: '#f0f2f7'}}>Cancelar</Button>
                </form>
            </div>
        </div>
    ) : "";
};

export default AgregarRestauranteComponent;