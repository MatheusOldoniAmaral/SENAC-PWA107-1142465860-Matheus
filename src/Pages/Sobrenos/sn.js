import {Link} from "react-router-dom";

function Sobrenos() {
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
                <h1>Sobre Nós</h1>
            </div>
            <div class="container">
                <p class="sn">ADO da matéria de Programação Web, do curso de Análise e Desenvolvimento de Sistemas, desenvolvida para fins didáticos sobre ReactJS - JSX e o uso do useState em aplicações Web.</p>
                <h2>Desenvolvido por:</h2>
                <ul>
                    <li><a href="https://github.com/RM-Saraiva" target="_blank">Rafael Martins Saraiva</a></li>
                    <li><a href="https://github.com/MatheusOldoniAmaral" target="_blank">Matheus Oldoni Amaral</a></li>
                </ul>
                <h3>Com o direcionamento do professor:</h3>
                <ul>
                    <li><a href="https://github.com/ProfCarlosVerissimo" target="_blank">Carlos Veríssimo</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sobrenos;