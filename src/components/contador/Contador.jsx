import React, {Component} from "react";
import "./Contador.css"
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component{
    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInincial || 5,
    }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => { // o (e) é um evento dessa arrow function
        this.setState({
            passo: novoPasso, // o + é para transformar o valor string que vai vim para um valor interio
        });
    };
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} ></PassoForm>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador