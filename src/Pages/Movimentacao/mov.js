import {Link} from "react-router-dom";
import {useState} from "react";

function Movimentacao() {

    const [entradaNome, setEntradaNome] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');
    const [entradaDep, setEntradaDep] = useState('');
    const [entradaSaque, setEntradaSaque] = useState('');
    const [entradaSaldo, setEntradaSaldo] = useState('');

    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', cpfDados:'XXX.XXX.XXX-XX', saldoDados:'0,00', depDados:'0,00', saqDados:'0,00'}
    );

    function atualizar(dados){
        dados.preventDefault();
        var saldo;
        var deposito;
        var saque;
        var total;

        if(entradaDep === ''){
            deposito=0;
        } else {
            deposito = parseInt(entradaDep);
        }

        if(entradaSaque === ''){
            saque=0;
        } else {
            saque = parseInt(entradaSaque);
        }    

        if(entradaSaldo === ''){
            saldo = 0;
        } else {
            saldo = parseInt(entradaSaldo);
        }

        total = 0;

        total = ((saldo - saque) + deposito);

        setDadosUsuario(
            {nomeDados:entradaNome, cpfDados:entradaCPF, saldoDados:total, depDados:deposito, saqDados:saque}
        );

        setEntradaNome('');
        setEntradaCPF('');
        setEntradaSaldo('');
        setEntradaDep('');
        setEntradaSaque('');
    }

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
                <h1>Movimentação da conta</h1>
            </div>

            <div>
                <form onSubmit={atualizar}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>
                    
                    <br/>
                    <label>CPF:</label>
                    <input type="text" placeholder="Digite seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>
                    
                    <br/>
                    <label>Saldo:</label>
                    <input type="text" placeholder="Digite seu saldo" value={entradaSaldo} onChange={(evento) => setEntradaSaldo(evento.target.value)}></input>
                    
                    <br/>
                    <label>Depósito:</label>
                    <input type='text' placeholder='Digite o Valor do Depósito' value={entradaDep} onChange={(evento) => setEntradaDep(evento.target.value)}></input>

                    <br/>
                    <label>Saque:</label>
                    <input type='text' placeholder='Digite o Valor do Saque' value={entradaSaque} onChange={(evento) => setEntradaSaque(evento.target.value)}></input>

                    <br/>
                    <button type='submit'>Atualizar</button>
                </form>
            </div>

            <hr/>

            <div>
                <h2>Dados e total</h2>
                <label>Cliente:&nbsp;{dadosUsuario.nomeDados}</label>
                <br></br><br/>
                <label>CPF:&nbsp;{dadosUsuario.cpfDados}</label>
                <br></br><br/>
                <label>Saldo:&nbsp;R$&nbsp;{dadosUsuario.saldoDados}</label>
                <br></br><br/>
                <label>Valor Depositado:&nbsp;+ R$&nbsp;{dadosUsuario.depDados}</label>
                <br></br><br/>
                <label>Valor Saque:&nbsp;- R$&nbsp;{dadosUsuario.saqDados}</label>
            </div>
        </div>
        
    );
}

export default Movimentacao;