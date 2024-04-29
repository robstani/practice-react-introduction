import React from 'react';
import MenuItems from '../../03/comps/MenuItems';


const Menu = () => {
    return (
        <ul>
            <MenuItems text="home" url="/" />
            <MenuItems text="kontakt" url="/contact" /> 
        </ul>
    );
}

export default Menu;

