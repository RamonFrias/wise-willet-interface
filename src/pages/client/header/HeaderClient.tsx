import React from "react";

function HeaderClient() {
    return (
        <header>
            <div>
                <h3><a href="/">LOGOTIPO</a></h3>
            </div>
            <nav>
                <ul>
                    <li><a href="consultar_comanda">Consultar comanda</a></li>
                    <li><a href="consultar_cardapio">Consultar cardápio</a></li>
                    <li><a href="gerar_conta">Consultar conta</a></li>
                </ul>
            </nav>
            <div className="user-info">
                Mesa 1
            </div>
        </header>
    )
}

export default HeaderClient; 