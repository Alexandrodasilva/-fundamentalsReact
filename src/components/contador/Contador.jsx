import React, {Component} from "react";
import "./Contador.css"
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

    setPasso = (e) => { // o (e) é um evento dessa arrow function
        this.setState({
            passo: +e.target.value, // o + é para transformar o valor string que vai vim para um valor interio
        });
    };
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput"> Passo: </label>
                    <input id="passoInput" 
                    type="number"
                    value={this.state.passo}
                    onChange={this.setPasso}
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador