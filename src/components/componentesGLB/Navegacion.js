import React from 'react';
import { useSelector } from 'react-redux';

//components
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';


function Navegacion({ user }) {
    const localizacion = useSelector((state) => state.localizacion)
    var tamanoLocalizacion = localizacion.length;

    return (
        <div>
           { tamanoLocalizacion < 11 || tamanoLocalizacion===16 || tamanoLocalizacion===27 || tamanoLocalizacion===28 ?
            <Navbar1 
                // user={user}
            />
            :
            <Navbar2/>
           }
        </div>
    );
}



export default Navegacion;