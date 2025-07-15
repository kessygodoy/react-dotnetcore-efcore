import { useEffect, useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  const atividadesArray = [
    {
      id: 1,
      prioridade: "1",
      titulo: "Primeira titulo",
      descricao: "Primeira Atividade",
    },
    {
      id: 2,
      prioridade: "2",
      titulo: "Segunda titulo",
      descricao: "Segunda Atividade",
    },
    {
      id: 3,
      prioridade: "3",
      titulo: "Terceira titulo",
      descricao: "Terceira Atividade",
    },
  ];

  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState(atividadesArray);
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : 
    setIndex(Math.max.apply( Math, atividades.map((item) => item.id)) + 1)
  }, [atividades])

  function addAtividade(ativ) {
    setAtividades([...atividades, {...ativ, id: index}]);
  }

  function deletarAtividade(id) {
    const novaAtividades = atividades.filter((a) => a.id !== id);
    setAtividades(novaAtividades);
  }
  function pegarAtividade(id) {
    const atividadePega = atividades.filter((a) => a.id === id);
    setAtividade(atividadePega[0]);
    console.log("Atividade pega no app.js"+ atividadePega)
  }
  function atualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
    setAtividade({id: 0})
  }
  function cancelarAtividade(){
    setAtividade({id: 0})
  }
  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        atividadeSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}

export default App;
