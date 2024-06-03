import React, { useState, useEffect } from 'react';
import './account.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cardId = 1;
    const url = `https://wisewallet-api.azurewebsites.net/api/Item/get_itens${cardId}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud falló');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setItems(data); // Atualiza o estado 'items' com os dados da API
      })
      .catch(error => {
        console.error('Ocurrió un error:', error);
      });
  }, []); // O segundo argumento vazio faz com que o useEffect execute apenas uma vez, após a montagem do componente

  const calculateTotal = () => {
    let total = 0.00;
    items.forEach(item => {
      total += item.itemQuantity * item.itemPrice;
    });
    return parseFloat(total).toFixed(2); // Arredonda o total para 2 casas decimais
  };

  return (
    <div>
      <h2>Conta para pagar</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Total por item</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>{item.itemPrice}</td>
              <td>{parseFloat(item.itemQuantity * item.itemPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 align="center">Total a pagar: R$ {calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default ShoppingList;
