import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import UserPage from "./pages/user/UserPage.tsx";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/user" element={<UserPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
