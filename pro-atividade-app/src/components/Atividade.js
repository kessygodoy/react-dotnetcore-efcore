import React from 'react'

export default function Atividade({atividade, deletarAtividade, pegarAtividade}) {

  
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }
  function prioridadeStyle(param) {
    switch (param) {
      case "1":
        return "smile";
      case "2":
        return "meh";
      case "3":
        return "frown";
      default:
        return "error";
    }
  }
  function prioridadeColor(param) {
    switch (param) {
      case "1":
        return "success";
      case "2":
        return "primary";
      case "3":
        return "warning";
      default:
        return "secondary";
    }
  }

  return (
    <div
              className={
                "card mb-2 shadow-sm border-" +
                prioridadeColor(atividade.prioridade)
              }
            >
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                    <span className="badge  text-bg-secondary me-2">
                      {atividade.id}
                    </span>
                    - {atividade.titulo}
                  </h5>
                  <h6>
                    Prioridade:
                    <span
                      className={
                        "ms-1 text-" + prioridadeColor(atividade.prioridade)
                      }
                    >
                      <i
                        className={`me-1 fa-regular fa-face-${prioridadeStyle(
                          atividade.prioridade
                        )}`}
                      ></i>
                      {prioridadeLabel(atividade.prioridade)}
                    </span>
                  </h6>
                </div>
                <p className="card-text">{atividade.descricao}</p>
                <div className="d-flex justify-content-end pt-2 m-0 border-top">
                  <button className="btn btn-sm btn-outline-primary me-2 "
                    onClick={() => pegarAtividade(atividade.id)}
                  >
                    <i className="fas fa-pen me-2"></i>
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deletarAtividade(atividade.id)}
                  >
                    <i className="fas fa-trash me-2"></i>
                    Deletar
                  </button>
                </div>
              </div>
            </div>
  )
}
