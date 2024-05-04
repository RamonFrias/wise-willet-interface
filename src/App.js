import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderAdmin from "./pages/Administrator/header/HeaderAdmin.tsx";
import HeaderClient from "./pages/client/header/HeaderClient.tsx";
import HomePage from "./pages/Administrator/home/HomePage.tsx";
import UserPage from "./pages/Administrator/user/UserPage.tsx";
import TablePage from "./pages/Administrator/table/TablePage.tsx";
import CardPage from "./pages/Administrator/card/CardPage.tsx";
import MenuPage from "./pages/client/menu/menu.tsx";
import CardPageClient from "./pages/client/card/card.tsx";

function App() {
  const isAdmin = false;
  return (
    <BrowserRouter>
        {isAdmin ? <HeaderAdmin /> : <HeaderClient />}
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cadastrar_cliente" element={<UserPage/>}/>
            <Route path="/cadastrar_mesa" element={<TablePage/>}/>
            <Route path="/cadastrar_comanda" element={<CardPage/>}/>
            <Route path="/consultar_comanda" element={<CardPageClient/>}/>
            <Route path="/consultar_cardapio" element={<MenuPage/>}/>
            <Route path="/gerar_conta" element={<CardPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
