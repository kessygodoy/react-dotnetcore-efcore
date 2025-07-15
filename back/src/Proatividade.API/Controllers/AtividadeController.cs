using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proatividade.API.Models;

namespace Proatividade.API
{
    [ApiController]
    [Route("api/[controller]")] //Rota para acessar esse controller
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>() {
                new Atividade(1),
                new Atividade(2),
                new Atividade(3),
            };

        [HttpGet] //cria um get
        public IEnumerable<Atividade> Get()
        {
            return Atividades;
        }
        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }
        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            return Atividades.Append(atividade);
        }
        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            atividade.Id = atividade.Id + 1;
            return atividade;
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Meu primeiro metodo delete {id}";
        }
    }
}