import React, { useEffect, useState } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm({
  addAtividade,
  atividades,
  atividadeSelecionada,
  atualizarAtividade,
  cancelarAtividade
}) {
  const [atividade, setAtividade] = useState({ atividadeAtual });

  useEffect(() => {
    if (atividadeSelecionada.id !== 0) {
      setAtividade(atividadeSelecionada);
    }
  }, [atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (atividadeSelecionada) {
      return atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(atividadeSelecionada.id !== 0)
        atualizarAtividade(atividade);
    else
        addAtividade(atividade);
    
        setAtividade(atividadeInicial)
  }

  function handleCancelar(){
    setAtividade(atividadeInicial)
    cancelarAtividade()
  }

  return (
    <>
    <h1>Atividades {atividadeSelecionada.id !== 0 ? - + " " + atividade.id : ""}</h1>
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="col-md-6">Título</label>
          <input
            value={atividade.titulo}
            name="titulo"
            onChange={inputTextHandler}
            id="titulo"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            id="prioridade"
            value={atividade.prioridade}
            name="prioridade"
            onChange={inputTextHandler}
            className="form-select"
          >
            <option defaultValue={"0"}>Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="col-md-6">Descrição</label>
          <textarea
            value={atividade.descricao}
            name="descricao"
            onChange={inputTextHandler}
            id="descricao"
            type="text"
            className="form-control"
          />
        <hr />
        </div>
        <div className="col-12 mt-0">
          {atividadeSelecionada.id === 0 ? 
            <button
              className="btn btn-outline-secondary"
            //   onClick={addAtividade}
            type="submit"
            >
                <i className="fas fa-plus me-2"></i>
               Atividade
            </button>
           : 
            <>
              <button
                className="btn btn-outline-primary me-2"
                type="submit"
              >
                <i className="fas fa-save me-2"></i>
                Salvar
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={handleCancelar}
                // type="button"
              >
                <i className="fas fa-x me-2"></i>
                Cancelar
              </button>
            </>
          }
        </div>
      </form>
    </div>
    </>
  );
}
