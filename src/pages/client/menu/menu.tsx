// MenuPage.js
import React from 'react';
import MenuItem from './itens/item.tsx';
import './menu.css';
import Hamburguer from '../../../images/Hamburguer.jpg';
import Pizza from '../../../images/Pizza.jpg';
import Salada from '../../../images/Salada.jpg';
import Sushi from '../../../images/Sushi.jpg';
import Macarrao from '../../../images/Macarrao.jpg';
import Baguete from '../../../images/Baguete.jpg';
import Sopa from '../../../images/Sopa.jpg';
import Taco from '../../../images/Tacos.jpg';
import Peixe from '../../../images/Peixe.jpg';
import Torta from '../../../images/Torta.jpg';

function MenuPage() {
    const menuItems = [
        {
            id: 1,
            name: "Hambúrguer",
            description: "Um delicioso hambúrguer preparado com ingredientes frescos.",
            price: 50.00,
            image: [Hamburguer],
        },
        {
            id: 2,
            name: "Pizza",
            description: "Uma pizza quentinha e saborosa, perfeita para compartilhar.",
            price: 70.00,
            image: [Pizza],
        },
        {
            id: 3,
            name: "Salada da casa",
            description: "Uma salada fresca e saudável, ideal para uma refeição leve.",
            price: 25.00,
            image: [Salada],
        },
        {
            id: 4,
            name: "Combinado de sushis",
            description: "Sushi fresco e delicioso, preparado com os melhores ingredientes.",
            price: 130.00,
            image: [Sushi],
        },
        {
            id: 5,
            name: "Macarrão",
            description: "Macarrão al dente coberto com um molho caseiro incrível.",
            price: 60.00,
            image: [Macarrao],
        },
        {
            id: 6,
            name: "Baguete de frango grelhado",
            description: "Um sanduíche de frango grelhado com alface e tomate frescos.",
            price: 30.00,
            image: [Baguete],
        },
        {
            id: 7,
            name: "Sopa de camarão",
            description: "Uma sopa quente e reconfortante, perfeita para os dias frios.",
            price: 35.00,
            image:[Sopa],
        },
        {
            id: 8,
            name: "Tacos",
            description: "Tacos mexicanos recheados com carne, queijo e vegetais frescos.",
            price: 40.00,
            image: [Taco],
        },
        {
            id: 9,
            name: "Peixe Grelhado",
            description: "Peixe fresco grelhado com limão e ervas, acompanhado de legumes.",
            price: 47.00,
            image: [Peixe],
        },
        {
            id: 10,
            name: "Torta de limão",
            description: "Uma deliciosa torta de limão, leve e gostosa.",
            price: 15.00,
            image: [Torta],
        },
    ];
     

    return (
        <div className="menuPage">
            <h2>Cardápio</h2>
            <div className="menuItems">
                {menuItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default MenuPage;
