import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComPar from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Number from "./components/basicos/Number";

export default function App(){
    return(
        <div id="app">
            <h1>Fundamentos React(arrow)</h1>
            <Number numMax={24} numMin={10}></Number>
            <Fragmento/>
            <ComPar 
                titulo="Segundo Comenente"
                aluno="Alexandro" 
                nota={9.5} />
            <Primeiro></Primeiro>
        </div>
    );
}