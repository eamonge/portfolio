import React from 'react'
import { Routes as Routez, BrowserRouter, Route, useNavigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Landing from './components/pages/Landing';
import { setNavigator } from './components/utils/navigationUtil';
import Navbar from './components/pages/Navbar';
import Administracion from './components/pages/Administracion/Administracion';
import Clientes from './components/pages/Clientes';
import Proveedores from './components/pages/Proveedores';
import Reportes from './components/pages/Reportes';
import Restaurantes from './components/pages/Restaurantes';
import Seguridad from './components/pages/Seguridad';

const NavigatorSetter = () => {
    const navigate = useNavigate();
    setNavigator(navigate);
    return null;
};

const Routes = () => {
    return (
        <div className='backgroundMainModal'>
            <BrowserRouter>
                <NavigatorSetter />
                <Routez>
                    <Route element={<Navbar />}>
                        <Route path='/restaurantes' element={<Restaurantes />} />
                        <Route path='/seguridad' element={<Seguridad />} />
                        <Route path='/reportes' element={<Reportes />} />
                        <Route path='/proveedores' element={<Proveedores />} />
                        <Route path='/clientes' element={<Clientes />} />
                        <Route path='/administracion' element={<Administracion />} />
                        <Route path='/home' element={<Landing />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/' element={<Login />} />
                    </Route>
                </Routez>

            </BrowserRouter>
        </div>
    )
}

export default Routes