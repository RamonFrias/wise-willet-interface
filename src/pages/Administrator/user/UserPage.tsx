import React, { useState } from 'react';
import './UserPage.css';

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

function UserPage() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNome('');
        setSobrenome(''); 
        setTelefone('');

        const fullName = `${nome} ${sobrenome}`;
        const url = "https://localhost:7227/api/Client";

        const data = {
            "clientId": 0,
            "clientName": fullName,
            "clientCPF": "5678726387",
            "clephoneNumber": telefone
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
                    exibirMensagem("Usuário cadastrado com sucesso!");
                } else {
                    exibirMensagem("Erro ao cadastrar o usuário!");
                }
            })
            .catch(error => {
                exibirMensagem("Erro ao enviar os dados!")
            });
    }

    return (
        <div className="container">
            <h2>Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        placeholder='Informe o nome'
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input 
                        type="text" 
                        id="sobrenome" 
                        name="sobrenome"
                        placeholder='Informe o sobrenome'
                        value={sobrenome} 
                        onChange={(e) => setSobrenome(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Número de Telefone:</label>
                    <input 
                        type="tel" 
                        id="telefone" 
                        name="telefone" 
                        placeholder='Informe o número de telefone'
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn-submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default UserPage;
