import React, { useState, useEffect } from 'react';
import Menulist from './Menulist';

function Menu() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/Menu')
            .then(response => response.json())
            .then(data => setMenuData(data || []))
            .catch(error => console.error('Error fetching menu data:', error));
    }, []);

    return (
        <div>
            <h1>Menu Page</h1>
            <Menulist menudata={menuData} />
        </div>
    );
}

export default Menu;
