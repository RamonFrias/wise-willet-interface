import React, { useState } from 'react';
import './item.css';
import Hamburguer from '../../../../images/Hamburguer.jpg';
import Pizza from '../../../../images/Pizza.jpg';
import Salada from '../../../../images/Salada.jpg';
import Sushi from '../../../../images/Sushi.jpg';
import Macarrao from '../../../../images/Macarrao.jpg';
import Baguete from '../../../../images/Baguete.jpg';
import Sopa from '../../../../images/Sopa.jpg';
import Taco from '../../../../images/Tacos.jpg';
import Peixe from '../../../../images/Peixe.jpg';
import Torta from '../../../../images/Torta.jpg';

function verifyItemImageUrl(itemName) {
    switch(itemName) {
        case "Hambúrguer":
            return Hamburguer;
        
        case "Pizza":
            return Pizza;
        
        case "Salada da casa":
            return Salada;

        case "Combinado de sushis":
            return Sushi;

        case "Macarrão":
            return Macarrao;
        
        case "Baguete de frando grelhado":
            return Baguete;

        case "Sopa de camarão":
            return Sopa;

        case "Tacos":
            return Taco;
            
        case "Peixe Grelhado":
            return Peixe;

        case "Torta de limão":
            return Torta;
    }
}

function MenuItem({ item }) {
    const { itemName, itemPrice, itemQuantity } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // Inicializa a quantidade com 1

    const itemImage = verifyItemImageUrl(itemName);

    return (
        <div className="menuItem">
            <img src={itemImage} alt={itemName} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <div className="itemDetails">
                <h3>{itemName}</h3>
                <p>{itemQuantity} unidades</p>
                <p className="price">R$ {itemPrice}</p>
            </div>
        </div>
    );
}

export default MenuItem;
