import {Link} from "react-router-dom";
import {useState} from 'react';

function Cadastro() {
    
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');
    
    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', emailDados:'PRIVADO', cpfDados:'XXX.XXX.XXX-XX'}
    );

    function registrarUsuario(dados){
        dados.preventDefault();
        
        setDadosUsuario(
            {nomeDados:entradaNome, emailDados:entradaEmail, cpfDados:entradaCPF}
        );

        setEntradaNome('');
        setEntradaEmail('');
        setEntradaCPF('');
        
    }
    
    return (
        <div class="container">
            <div class="cabeçalho" >
                <Link to="/" class="links">Home</Link>
                <Link to="/Cadastro" class="links">Cadastro</Link>
                <Link to="/financiamento" class="links">Financiamento</Link>
                <Link to="/Movimentacao" class="links">Movimentação</Link>
                <Link to="/Sobrenos" class="links">Sobre Nós</Link>
                <hr/>
            </div>
            <div class="a">
                <h1>Cadastro</h1>
            </div>

            <div class="forms">
                <form onSubmit={registrarUsuario}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>
                    
                    <br/>
                    <label>Email:</label>
                    <input type="email" placeholder="Digite seu email" value={entradaEmail} onChange={(evento) => setEntradaEmail(evento.target.value)}></input>
                    
                    <br/>
                    <label>CPF:</label>
                    <input type="text" placeholder="Digite seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>
                    
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <hr/>
            <div>
                <h2>Dados informados</h2>
                <br/>
                <label>Nome:&nbsp;{dadosUsuario.nomeDados}</label>
                <br></br><br/>
                <label>Email:&nbsp;{dadosUsuario.emailDados}</label>
                <br></br><br/>
                <label>CPF:&nbsp;{dadosUsuario.cpfDados}</label>
            </div>
        </div>
    );
}

export default Cadastro;