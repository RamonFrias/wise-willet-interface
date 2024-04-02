import React from "react";

function Header() {
    return (
        <header>
            <div>
                <h3><a href="/">LOGOTIPO</a></h3>
            </div>
            <nav>
                <ul>
                    <li><a href="user">Cadastrar Usuário</a></li>
                    <li><a href="card">Cadastrar Comanda</a></li>
                    <li><a href="table">Cadastrar Mesas</a></li>
                </ul>
            </nav>
            <div className="user-info">
                Ramon Frias
            </div>
        </header>
    )
}

export default Header;