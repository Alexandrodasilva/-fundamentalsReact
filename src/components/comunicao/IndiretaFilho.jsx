import React from "react";

export default props => {
    const min = 50;
    const max = 70;
    const gerarIdade  = () => parseInt(Math.random() * (max - min) + max)
    return(
        <>
            <div>filho</div>
            <button onClick={ _ => props.quandoClicar('alexandro', gerarIdade(), true)}
            >Fornecer informações</button>
        </>
    )
}