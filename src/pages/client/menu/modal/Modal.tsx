import React from 'react';
import './Modal.css';

function Modal({ name, price, quantity, setQuantity, onClose, onConfirm }) {
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const getTotalPrice = () => {
        return (price * quantity).toFixed(2);
    };

    return (
        <div className="modal">
            <div className="modalContent">
                <h3>{name}</h3>
                <p>Preço unitário: ${price.toFixed(2)}</p>
                <p>Total: ${getTotalPrice()}</p>
                <div className="quantityControl">
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="modalActions">
                    <button onClick={onConfirm}>Confirmar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
