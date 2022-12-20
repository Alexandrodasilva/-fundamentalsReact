import React from "react";
import IndiretaFilho from "./IndiretaFilho";
export default function Indireta(props){
    let nome = "?";
    let idade = 0;
    let nerd = false;
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
            nome = nomeParam;
            idade = idadeParam;
            nerd = nerdParam;
        console.log(nome, idade, nerd)
    }
    return(
        <>
            <div>
                <span>{nome}</span>
                <span><strong> {idade} </strong></span>
                <span>{nerd ? 'verdadeiro' : 'falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </>
    )
}