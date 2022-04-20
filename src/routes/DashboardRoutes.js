import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Home from '../components/Home'
import NavBar2 from '../components/NavBar2';
import Veterinarias  from '../components/Veterinarias';
import TipoMascota  from '../components/TipoMascota';
import Servicios from '../components/Servicios';
import Perfil from '../components/Perfil';
export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
            <NavBar2/>
                <Routes>
                    <Route path="/" element={<TipoMascota />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/tipo-mascota" element={<TipoMascota />} />
                    <Route path="/veterinarias" element={<Veterinarias />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>

        </>
    )
}
