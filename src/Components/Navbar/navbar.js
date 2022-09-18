import React from 'react';
import Cartwidget from '../Cartwidget/cartwidget';


export const Navbar = () => {
    return (
        <div className='Navbar'>
            <img src='' alt=''></img>
            <h1>Tienda</h1>
            <nav>
                <a href='#'>Categoría 1</a>
                <a href='#'>Categoría 2</a>
                <a href='#'>Categoría 3</a>
                <Cartwidget/>
            </nav>
        </div>
    )
}

export default Navbar;

