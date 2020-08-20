'use strict'

class TarefaController {
    index({view}) {
        const tarefas = [
            {title: 'Tarefa Um', body: 'Esta é a primeira tarefa'},
            {title: 'Tarefa Dois', body: 'Esta é a segunda tarefa'},
        ]
        
        return view.render('tarefa', {
            title: 'Suas Tarefas',
            tarefas: tarefas
        })
    }
}

module.exports = TarefaController
