import React from "react";

export default function Number(props){
    const { numMax, numMin } = props;
    const num = parseInt(Math.random() * (numMax - numMin) + numMin)
    return(
        <>
            <h2>Valor Aleatorio</h2>
            <p>
                <strong>valor minimo:</strong> {numMin}
            </p>
            <p>
                <strong>valor maximo:</strong> {numMax}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {num}
            </p>

        </>
    );
}