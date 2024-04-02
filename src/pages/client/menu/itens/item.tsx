// MenuItem.js
import React from 'react';
import './item.css';

function MenuItem({ item }) {
    const { image, name, description, price } = item;

    return (
        <div className="menuItem">
            <img src={image} alt={name} />
            <div className="itemDetails">
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">${price.toFixed(2)}</p>
                <button className="addButton">Adicionar</button>
            </div>
        </div>
    );
}

export default MenuItem;
