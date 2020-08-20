'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefaSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()
      table.string('title')
      table.string('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefaSchema
