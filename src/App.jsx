import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComPar from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Number from "./components/basicos/Number";
import Card from "./layout/Card"
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/FamiliaMembro";
import './App.css'

export default function App(){
    return(
        <div className="App">
            <h1>Fundamentos React(arrow)</h1>
            <div className="Cards">
                <Card titulo="#05 - componente filho" color="#00C8F8">
                    <Familia sobrenome="silva" idade={12}>
                        <MembroFamilia nome="pedro" />
                        {/* <MembroFamilia nome="ana"/>
                        <MembroFamilia nome="junior" /> */}
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio aleatorio" color="#FA6900">
                    <Number numMax={24} numMin={10}></Number>
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8871A">
                    <ComPar 
                        titulo="Segundo Comenente"
                        aluno="Alexandro" 
                        nota={9.5} />
                </Card>

                <Card titulo="#01 - Primeiro componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}