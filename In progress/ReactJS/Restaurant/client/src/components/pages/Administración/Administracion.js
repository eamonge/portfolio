import React from 'react';
import EspecialesComponent from '../Especiales/Especiales';
import MesasComponent from './Mesas';
import PuestosComponent from './Puestos';
import EmpleadosComponent from './Empleados';

function AdministracionComponent() {
    return (
        <div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
                <EspecialesComponent />
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
                <MesasComponent />
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
                <EmpleadosComponent />
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
                <PuestosComponent />
            </div>
        </div>
    );
}

export default AdministracionComponent;