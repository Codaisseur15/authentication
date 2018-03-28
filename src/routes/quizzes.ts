import { JsonController, Post, Get, CurrentUser, Patch, Delete } from 'routing-controllers'
import * as request from 'superagent'
import User from '../users/entity'

const quizzesUrl = process.env.QUIZZES_URL || 'http://localhost:4008'


@JsonController()
export default class QuizzesController {

//get:/quizzes
  @Get('/quizzes')
  async getQuizzes(
    @CurrentUser() user: {id, role}) {
      request
        .get(`${quizzesUrl}/quizzes`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

//get:/quizzes/:id
    @Get('/quizzes/:id')
    async getQuizzesId(
      @CurrentUser() user: {id, role}) {
        request
          .get(`${quizzesUrl}/quizzes/:id`)
          .set({'x-user-id': user.id, 'x-user-role': user.role})
          .catch(err => alert(err))
      }
//post:/quizzes
  @Post('/quizzes')
  async postQuizzes(
    @CurrentUser() user: {id, role}) {
      request
        .post(`${quizzesUrl}/quizzes`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

//patch:/quizzes
  @Patch('/quizzes')
  async patchQuizzes(
    @CurrentUser() user: {id, role}) {
      request
        .patch(`${quizzesUrl}/quizzes`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

//delete:/quizzes/:id
    @Delete('/quizzes/:id')
    async deleteQuizzesId(
      @CurrentUser() user: {id, role}) {
        request
          .patch(`${quizzesUrl}/quizzes/:id`)
          .set({'x-user-id': user.id, 'x-user-role': user.role})
          .catch(err => alert(err))
      }
}
