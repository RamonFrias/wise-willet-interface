import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Administrator/header/Header.tsx";
import HomePage from "./pages/Administrator/home/HomePage.tsx";
import UserPage from "./pages/Administrator/user/UserPage.tsx";
import TablePage from "./pages/Administrator/table/TablePage.tsx";
import CardPage from "./pages/Administrator/card/CardPage.tsx";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/table" element={<TablePage/>}/>
            <Route path="/card" element={<CardPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
