import React from "react";

export default props => {
    return(
        <>
            <div>filho</div>
            <button onClick={ _ => props.quandoClicar('alexandro', 25, true)}
            >Fornecer informações</button>
        </>
    )
}