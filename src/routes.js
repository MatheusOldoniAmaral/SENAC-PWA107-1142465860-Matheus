import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Movimentacao from './Pages/Movimentacao/mov.js';
import Financiamento from './Pages/Financiamento/financiamento.js';
import Sobrenos from './Pages/Sobrenos/sn.js';

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/financiamento" element={<Financiamento />} />
                <Route path="/movimentacao" element={<Movimentacao />} />
                <Route path="/Sobrenos" element={<Sobrenos />} />
            </Routes>
        </BrowserRouter>
    );
} 

export default RouterApp