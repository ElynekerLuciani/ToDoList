'use strict'
const Tarefa = use('App/Models/Tarefa')

class TarefaController {
    async index({view}) {
        const tarefas = await Tarefa.all()
        
        return view.render('tarefas', {
            title: 'Suas Tarefas',
            tarefas: tarefas.toJSON()
        })
    }
}

module.exports = TarefaController
