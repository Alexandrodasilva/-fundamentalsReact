import React from "react";
import produtos from "../../data/produtos"
import "./TabelaProdutos.css"


function TabelaProduto(props){
    function getLinhas(){
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i%2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$: {produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                        {getLinhas()}
                </tbody>
            </table>
        </div>
    );
}
export default TabelaProduto;