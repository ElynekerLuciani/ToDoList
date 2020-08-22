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

    async store({ request, response, session }) {
        const tareta = new Tarefa()

        tareta.title = request.input('title')
        tareta.body = request.input('bodt')

        await tareta.save()
        session.flash({ notification: 'Tarefa Adicionada'})

        return response.redirect('/tarefas')
    }

}

module.exports = TarefaController
