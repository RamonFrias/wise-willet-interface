import React, { useState } from 'react';
import './TablePage.css';
import './TablePage.js';

function exibirMensagem(mensagem) {
    const mensagemElemento = document.createElement('div');
    mensagemElemento.textContent = mensagem;
    mensagemElemento.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
    `;

    document.body.appendChild(mensagemElemento);

    setTimeout(() => {
        document.body.removeChild(mensagemElemento);
    }, 3000);
}

function TablePage() {
    const [numeroMesa, setNumeroMesa] = useState('');
    const [quantidadePessoas, setQuantidadePessoas] = useState('');
    const [localizacao, setLocalizacao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNumeroMesa('');
        setQuantidadePessoas('');
        setLocalizacao('');

        const url = "https://localhost:7227/api/Table";

        var statusMesa = 0;

        if(quantidadePessoas === "Reservada") {
            statusMesa = 4;
        }
        else {
            statusMesa = 5;
        }

        const data = {
            "tableId": 0,
            "tableNumber": numeroMesa,
            "tableStatus": statusMesa,
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
                    exibirMensagem("Mesa cadastrada com sucesso!");
                } else {
                    exibirMensagem("Erro ao cadastrar a mesa!");
                }
            })
            .catch(error => {
                exibirMensagem("Erro ao enviar os dados");
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
                        <option value="Disponível">
                            Disponível
                        </option>
                        <option value="Reservada">
                            Reservada
                        </option>
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
