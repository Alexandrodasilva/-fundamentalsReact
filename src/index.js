import reactDOM from 'react-dom' 
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComPar from './components/basicos/ComParamentro'


reactDOM.render(
    <div> 
        <Primeiro>

        </Primeiro>
        <ComPar 
            titulo="Segundo Comenente"
            aluno="Alexandro" 
            nota={9.5} />
    </div>, 
    document.getElementById('root')
)
