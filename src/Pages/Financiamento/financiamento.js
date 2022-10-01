import {Link} from "react-router-dom";
import {useState} from "react";

function Financiamento() {

    const [entradaCC, setEntradaCC] = useState('');
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaValor, setEntradaValor] = useState('');
    const [entradaParcelas, setEntradaParcelas] = useState('');

    const [dadosUsuario, setDadosUsuario] = useState(
        {nomeDados:'PRIVADO', dadosCC:'XXXXXX-X', valorDados:'0,00', parcelasDados:'0,00', jurosDados:'0,00'}
    );

    function calcularValor(dados){
        dados.preventDefault();

        var totalParcela = parseInt(entradaParcelas);
        var valorSolicitado = parseInt(entradaValor);
        var valorJuros = 0;
        var valorTotal = 0;

        if(entradaParcelas === '') {
            totalParcela = 0;
        } else {
            totalParcela = parseInt(entradaParcelas);
        }

        if(entradaValor === '') {
            valorSolicitado = 0;
        } else {
            valorSolicitado = parseInt(entradaValor);
        }

        if(totalParcela === 0) {
            valorTotal = valorSolicitado;
        } else {
            if (valorSolicitado > 3000 || totalParcela >= 11) {
                valorJuros = 0.8;
                valorTotal = (valorSolicitado * valorJuros) / totalParcela;
            } else {
                valorTotal = (valorSolicitado / totalParcela);
            }
        }

        setDadosUsuario(
            {nomeDados:entradaNome, dadosCC:entradaCC, valorDados:valorSolicitado, parcelasDados:valorTotal, jurosDados:valorJuros}
        );

        setEntradaCC('');
        setEntradaNome('');
        setEntradaValor('');
        setEntradaParcelas(''); 
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
                <h1>Financiamento</h1>
            </div>
            <div class="forms">
                <form onSubmit={calcularValor}>
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>
                    
                    <br></br>
                    <label>Conta Corrente:</label>
                    <input type="text" placeholder="Digite sua conta corrente" value={entradaCC} onChange={(evento) => setEntradaCC(evento.target.value)}></input>
                    
                    <br></br>
                    <label>Valor Solicitado:</label>
                    <input type="text" placeholder="Digite o valor solicitado" value={entradaValor} onChange={(evento) => setEntradaValor(evento.target.value)}></input>
                    
                    <br></br>
                    <label>Parcelas:</label>
                    <input type="number" placeholder="Digite a quantidade de parcelas" value={entradaParcelas} onChange={(evento) => setEntradaParcelas(evento.target.value)}></input>
                    
                    <br></br>
                    <button type="submit">Calcular</button>
                </form>
            </div>

            <hr/>

            <div>
                <h2>Valores</h2>
                <br></br>
                <label>Cliente:&nbsp;{dadosUsuario.nomeDados}</label>
                <br></br><br></br>
                <label>Número da Conta:&nbsp;{dadosUsuario.dadosCC}</label>
                <br></br><br></br>
                <label>Valor Solicitado: R$&nbsp;{dadosUsuario.valorDados}</label>
                <br></br><br></br>
                <label>Valor da Parcela:&nbsp;{dadosUsuario.parcelasDados}/mês</label>
                <br></br><br></br>
                <label>Juros:&nbsp;{dadosUsuario.jurosDados}x</label>
            </div>
        </div>
        
    );
}

export default Financiamento;