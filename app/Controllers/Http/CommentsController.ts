import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'
import Comment from 'App/Models/Comment'

export default class CommentsController {

  public async store({params, request, response}: HttpContextContract){

    const body = request.body()
    const moment_id = params.moment_id

    await Moment.findOrFail(moment_id)
    body.moment_id = moment_id

    const comment = await Comment.create(body)

    response.status(201)

    return{
      message: "Comentário adicionado com sucesso",
      data: comment
    }

  }

}
