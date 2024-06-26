import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="container">
            <header>
                <h1>Sejam Bem-vindos!</h1>
            </header>
            <main>
                <section className="destaque">
                    <div className="destaque-content">
                        <h2>O que oferecemos:</h2>
                        <ul>
                            <li>Produtos de alta qualidade</li>
                            <li>Excelente atendimento ao cliente</li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2024 - Página Inicial</p>
            </footer>
        </div>
    );
}

export default HomePage;
