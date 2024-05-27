import React from "react";
import logo from '../../../images/logo.jpg';

function HeaderAdmin() {
    return (
        <header>
            <div>
            <h3><a href="/"><img src={logo} alt="Logotipo" style={{ width: '30%', height: 'auto' }}/></a></h3>
            </div>
            <nav>
                <ul>
                    <li><a href="cadastrar_cliente">Cadastrar Cliente</a></li>
                    <li><a href="cadastrar_comanda">Cadastrar Comanda</a></li>
                    <li><a href="cadastrar_mesa">Cadastrar Mesas</a></li>
                </ul>
            </nav>
            <div className="user-info">
                Ramon Frias
            </div>
        </header>
    )
}

export default HeaderAdmin;