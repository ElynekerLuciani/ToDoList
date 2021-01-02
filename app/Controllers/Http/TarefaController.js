'use strict'
const Tarefa = use('App/Models/Tarefa')
const { validateAll } = use('Validator')

class TarefaController {
    async index({view}) {
        const tarefas = await Tarefa.all()
        
        return view.render('tarefas', {
            title: 'Suas Tarefas',
            tarefas: tarefas.toJSON()
        })
    }

    async store({ request, response, session }) {
        const mensagem = {
            'title.required': 'Required',
            'title.min': 'min 3'
        }

        const valicacao =  await validateAll(request.all(),{
            title: 'required|min:5|max:140',
            body: 'required|mim:10'
        },mensagem)

        if(valicacao.fails()){
            session.withErrors(valicacao.messages()).flashAll()
            return response.redirect('back')
        }

        const tareta = new Tarefa()

        tareta.title = request.input('title')
        tareta.body = request.input('bodt')

        await tareta.save()
        session.flash({ notification: 'Tarefa Adicionada'})

        return response.redirect('/tarefas')
    }

    async detail({ params, view }) {
        const tarefa = await Tarefa.find(params.id)
        return view.render('detail', {
            tarefa: tarefa
        })
    }

}

module.exports = TarefaController
