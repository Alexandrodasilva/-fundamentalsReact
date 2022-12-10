import reactDOM from 'react-dom' //importar o react-dom e o reactaDom é que vai ser usado
import React from 'react'
import './index.css'
// const el = document.getElementById('root')
// reactDOM.render('Olá React', el) // o método render para renderizar na tela
 // o primeiro parametro é para renderizar na tela 
 // e o segundo elemento é o que vai ser chamado para setar na pag 

//
const log = <strong>Olá React</strong>
reactDOM.render(
    <div> 
        <strong>
            {log /*par de chaves é para interpetrar a tag e pegar o valor da cons*/}       
        </strong> t
    </div>, 
    document.getElementById('root')
)

//outra forma de fazer uma chamada do root 