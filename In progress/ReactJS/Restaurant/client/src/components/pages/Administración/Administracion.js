import React from 'react';
import EspecialesComponent from './Especiales';

function AdministracionComponent() {
    return (
        <div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
                <EspecialesComponent />
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
            </div>
            <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
            </div>
        </div>
    );
}

export default AdministracionComponent;