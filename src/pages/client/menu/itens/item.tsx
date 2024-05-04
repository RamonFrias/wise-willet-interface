import React, { useState } from 'react';
import './item.css';
import Modal from '../modal/Modal.tsx'; // Importe o componente Modal

// function exibirMensagem(mensagem) {
//     const mensagemElemento = document.createElement('div');
//     mensagemElemento.textContent = mensagem;
//     mensagemElemento.style.cssText = `
//         position: fixed;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         padding: 20px;
//         background-color: #fff;
//         border: 1px solid #ccc;
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         z-index: 9999;
//     `;

//     document.body.appendChild(mensagemElemento);

//     setTimeout(() => {
//         document.body.removeChild(mensagemElemento);
//     }, 3000);
// }

function MenuItem({ item }) {
    const { image, name, description, price } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // Inicializa a quantidade com 1

    const handleAddButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmAdd = () => {
        const url = "https://localhost:7227/api/Item/post_itens";

        const pricePerQuantity = (price * quantity);

        const data = {
            "itemId": 0,
            "itemName": name,
            "itemPrice": pricePerQuantity,
            "itemQuantity": quantity,
            "cardId": 1
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    alert("Seu pedido foi enviado a cozinha e já está em preparo!");
                } else {
                    alert("Erro ao cadastrar o pedido!");
                }
            })
            .catch(error => {
                alert("Erro ao enviar os dados!")
            });
        setIsModalOpen(false);
    };

    return (
        <div className="menuItem">
            <div>
            {isModalOpen && (
                <Modal
                    name={name}
                    price={price}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmAdd}
                />
            )}
            </div>
            <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
            <div className="itemDetails">
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">R$ {price.toFixed(2)}</p>
                <button className="addButton" onClick={handleAddButtonClick}>
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default MenuItem;
