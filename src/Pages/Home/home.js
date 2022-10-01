import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <div class="cabeçalho">
                <Link to="/" class="links">Home</Link>
                <Link to="/Cadastro" class="links">Cadastro</Link>
                <Link to="/financiamento" class="links">Financiamento</Link>
                <Link to="/Movimentacao" class="links">Movimentação</Link>
                <Link to="/Sobrenos" class="links">Sobre Nós</Link>
                <hr/>
            </div>
            <div class="a">
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;