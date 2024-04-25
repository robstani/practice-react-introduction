import React from 'react';

const MenuItems = ({ text, url}) => {
    return (
        <li>
            <a href={url}>{text}</a>
        </li>
    );
};

export default MenuItems;