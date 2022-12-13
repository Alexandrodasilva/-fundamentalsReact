import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComPar from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Number from "./components/basicos/Number";
import Card from "./layout/Card"
import './App.css'

export default function App(){
    return(
        <div className="App">
            <h1>Fundamentos React(arrow)</h1>
            <div className="Cards">
                <Card titulo="#04 - Desafio aleatorio">
                    <Number numMax={24} numMin={10}></Number>
                </Card>

                <Card titulo="#03 - Fragmento">
                    <Fragmento/>
                </Card>

                <Card titulo="#02 - Com Parametro">
                    <ComPar 
                        titulo="Segundo Comenente"
                        aluno="Alexandro" 
                        nota={9.5} />
                </Card>

                <Card titulo="#01 - Primeiro componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}