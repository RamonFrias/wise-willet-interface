import React, { useState } from 'react';
import './UserPage.css';
import './UserPage.js';

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
