import React from "react";
import Cadastrar from "./Cadastrar";
import Lista from "./Lista";

function Home(props){
    return(
        <div>
            
            <div>
                <h2>Home</h2>
            </div>
            <div>
                <button
                onClick={<Cadastrar></Cadastrar>}
                >Lista de usuarios</button>
                <button
                onClick={<Lista></Lista>}
                >Cadastrar usuário</button>
            </div>
        </div>
    );
}

export default Home;