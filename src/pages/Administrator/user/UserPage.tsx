import React, { useState } from 'react';
import './UserPage.css';

function UserPage() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados do usuário
        console.log('Nome:', nome);
        console.log('Sobrenome:', sobrenome);
        console.log('Telefone:', telefone);
        // Limpar os campos após o envio
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
