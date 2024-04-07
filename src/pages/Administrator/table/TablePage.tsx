import React, { useState } from 'react';
import './TablePage.css';
import './TablePage.js';

function TablePage() {
    const [numeroMesa, setNumeroMesa] = useState('');
    const [quantidadePessoas, setQuantidadePessoas] = useState('');
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

        const url = "https://localhost:7227/api/Table";

        const data = {
            "tableId": 0,
            "tableNumber": numeroMesa,
            "tableStatus": 3,
            "insideLocation": localizacao
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Solicitação POST bem-sucedida');
                } else {
                    console.error('Erro na solicitação POST');
                }
            })
            .catch(error => {
                console.error('Erro durante a solicitação POST:', error);
            });
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
                        placeholder="Informe o número da mesa"
                        value={numeroMesa}
                        onChange={(e) => setNumeroMesa(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidadePessoas">Status da mesa:</label>
                    <select
                        id="quantidadePessoas"
                        value={quantidadePessoas}
                        onChange={(e) => setQuantidadePessoas(e.target.value)}
                        required
                    >
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="localizacao">Localização:</label>
                    <input
                        type="text"
                        id="localizacao"
                        placeholder="Informe a localização da mesa"
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
