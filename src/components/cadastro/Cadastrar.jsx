import React from "react";

function Cadastrar(props){
    return(
        <div>
                <div>
                    <label>Nome: </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Data de Nascimento: </label>
                    <input type="date"></input>
                </div>
                <div>
                    <label>sexo: </label>
                    <select>
                        <option>Não selecionado</option>
                        <option >Feminino</option>
                        <option >Masculino</option>
                    </select>
                </div>
                <div>
                    <label>Estado de Nasc.: </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Cidade de Nasc.: </label>
                    <input type="text"></input>
                </div> 
            </div>
    )
}
export default Cadastrar;