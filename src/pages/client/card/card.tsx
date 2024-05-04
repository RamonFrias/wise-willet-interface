import React, { useState, useEffect } from 'react';
import MenuItem from './itens/item.tsx';
import '../menu/menu.css';

function CardPage() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const cardId = 1;
        const url = `https://localhost:7227/api/Item/get_itens${cardId}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud falló');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setMenuItems(data);
            })
            .catch(error => {
                console.error('Ocurrió un error:', error);
            });
    }, []);

    return (
        <div className="menuPage">
            <h2>Comanda</h2>
            <div className="menuItems">
                {menuItems.map(item => (
                    <MenuItem key={item.ItemId} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CardPage;
