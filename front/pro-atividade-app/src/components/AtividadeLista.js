import React from 'react'
import Atividade from './Atividade'

export default function AtividadeLista({atividades, deletarAtividade, pegarAtividade}) {
  return (
    <div className="mt-3">
        <h3>Atividades:</h3>
        <li className="list-group-item">
          {atividades.map((ativ) => (
            <Atividade 
              key={ativ.id}
              atividade={ativ}   
              deletarAtividade={deletarAtividade}
              pegarAtividade={pegarAtividade}
              />
          ))}
        </li>
      </div>
  )
}
