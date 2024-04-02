import React, { useState } from 'react';
import './TablePage.css';
import './TablePage.js';

function TablePage() {
    const [numeroMesa, setNumeroMesa] = useState('');
    var [quantidadePessoas, setQuantidadePessoas] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados da mesa
        console.log('Número da Mesa:', numeroMesa);
        console.log('Quantidade de Pessoas:', quantidadePessoas);
        console.log('Localização:', localizacao);

        // Limpar os campos após o envio
        setNumeroMesa('');
        setQuantidadePessoas('');
        setLocalizacao('');
    }

    return (
        <div className="container">
            <h2>Cadastro de Mesa</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="numeroMesa">Número da Mesa:</label>
                    <input 
                        type="text" 
                        id="numeroMesa" 
                        value={numeroMesa} 
                        onChange={(e) => setNumeroMesa(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidadePessoas">Quantidade de Pessoas:</label>
                    <input 
                        type="number" 
                        id="quantidadePessoas"
                        min="1"
                        max="20"
                        value={quantidadePessoas} 
                        onChange={(e) => setQuantidadePessoas(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="localizacao">Localização:</label>
                    <input 
                        type="text" 
                        id="localizacao" 
                        value={localizacao} 
                        onChange={(e) => setLocalizacao(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn-submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default TablePage;
