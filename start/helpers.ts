import app from '@adonisjs/core/services/app'
import repl from '@adonisjs/core/services/repl'
import { fsImportAll } from '@adonisjs/core/helpers'

repl.addMethod('loadHelpers', async () => {
  const helpers = await fsImportAll(app.makePath('app/helpers'))
  repl.server!.context.helpers = helpers

  repl.notify('Imported helpers. You can access them using the "#helpers" property')
  repl.server!.displayPrompt()
}, { description: "Load \"helpers\" folder in the REPL context." })
