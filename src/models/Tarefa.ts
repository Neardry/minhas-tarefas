import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.id = id
    this.titulo = titulo
    this.status = status
    this.descricao = descricao
    this.prioridade = prioridade
  }
}

export default Tarefa
