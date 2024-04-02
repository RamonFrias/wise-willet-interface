import React from "react";

function HeaderAdmin() {
    return (
        <header>
            <div>
                <h3><a href="/">LOGOTIPO</a></h3>
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