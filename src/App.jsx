import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComPar from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Number from "./components/basicos/Number";
import Card from "./layout/Card"
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicao/DiretaPai";
import IndiretaPai from "./components/comunicao/IndiretaPai";
import './App.css'

export default function App(){
    return(
        <div className="App">
            <h1>Fundamentos React(arrow)</h1>
            <div className="Cards">

                <Card titulo="#010 - comunicao Indireta" color="#8BAD39">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#09 - comunicao direta" color="#59323C">
                    <DiretaPai/>
                </Card>

                <Card titulo="#08 - Renderização condicional " color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: "alex"}} />
                    <UsuarioInfo usuario={{}} />
                </Card>

                <Card titulo="#07 - Desafio Repeticao" color="#3A9AD9">
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card titulo="#06 - Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - componente filho" color="#00C8F8">
                    <Familia sobrenome="silva" idade={12}>
                        <MembroFamilia nome="pedro" />
                        <MembroFamilia nome="ana"/>
                        <MembroFamilia nome="junior" />
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