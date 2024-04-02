import React, { useState } from 'react';
import './CardPage.js';
import './CardPage.css';

function CardPage() {
    const [numeroComanda, setNumeroComanda] = useState('');
    const [cliente, setCliente] = useState('');
    const [mesa, setMesa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados da comanda
        console.log('Número da Comanda:', numeroComanda);
        console.log('Cliente:', cliente);
        console.log('Mesa:', mesa);
        // Limpar os campos após o envio
        setNumeroComanda('');
        setCliente('');
        setMesa('');
    }

    return (
        <div className="container">
            <h2>Cadastro de Comanda</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="numeroComanda">Número da Comanda:</label>
                    <input 
                        type="text" 
                        id="numeroComanda" 
                        placeholder="Insira o número da comanda"
                        value={numeroComanda} 
                        onChange={(e) => setNumeroComanda(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cliente">Cliente:</label>
                    <input 
                        type="text" 
                        id="cliente" 
                        list="clientes"
                        placeholder="Selecione o cliente"
                        value={cliente} 
                        onChange={(e) => setCliente(e.target.value)} 
                        required 
                    />
                    <datalist id="clientes">
                        <option value="Cliente 1" />
                        <option value="Cliente 2" />
                        <option value="Cliente 3" />
                    </datalist>
                </div>
                <div className="form-group">
                    <label htmlFor="mesa">Mesa:</label>
                    <input 
                        type="text" 
                        id="mesa" 
                        list="mesas"
                        placeholder="Selecione a mesa"
                        value={mesa} 
                        onChange={(e) => setMesa(e.target.value)} 
                        required 
                    />
                    <datalist id="mesas">
                        <option value="Mesa 1" />
                        <option value="Mesa 2" />
                        <option value="Mesa 3" />
                    </datalist>
                </div>
                <button type="submit" className="btn-submit">Confirmar</button>
            </form>
        </div>
    );
}

export default CardPage;
