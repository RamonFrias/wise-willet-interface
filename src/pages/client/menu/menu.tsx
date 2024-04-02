// MenuPage.js
import React from 'react';
import MenuItem from './itens/item.tsx';
import './menu.css';

function MenuPage() {
    const menuItems = [
        {
            id: 1,
            name: "Hambúrguer",
            description: "Um delicioso hambúrguer preparado com ingredientes frescos.",
            price: 8.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Pizza",
            description: "Uma pizza quentinha e saborosa, perfeita para compartilhar.",
            price: 12.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Salada",
            description: "Uma salada fresca e saudável, ideal para uma refeição leve.",
            price: 6.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Sushi",
            description: "Sushi fresco e delicioso, preparado com os melhores ingredientes.",
            price: 14.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Macarrão",
            description: "Macarrão al dente coberto com um molho caseiro incrível.",
            price: 9.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Sanduíche de Frango",
            description: "Um sanduíche de frango grelhado com alface e tomate frescos.",
            price: 7.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 7,
            name: "Sopa",
            description: "Uma sopa quente e reconfortante, perfeita para os dias frios.",
            price: 5.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 8,
            name: "Tacos",
            description: "Tacos mexicanos recheados com carne, queijo e vegetais frescos.",
            price: 10.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 9,
            name: "Peixe Grelhado",
            description: "Peixe fresco grelhado com limão e ervas, acompanhado de legumes.",
            price: 13.99,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 10,
            name: "Café",
            description: "Uma xícara de café quentinho e aromático para começar o dia.",
            price: 2.99,
            image: "https://via.placeholder.com/150",
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
