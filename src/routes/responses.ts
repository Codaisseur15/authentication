import { JsonController, Post, Get, CurrentUser, Delete } from 'routing-controllers'
import * as request from 'superagent'

const responsesUrl = process.env.RESPONSES_URL || 'http://localhost:4001'

@JsonController()
  export default class ResponsesController {

  @Post('/responses')
  async postResponses(
    @CurrentUser() user: { id, role }) {
      request
        .post(`${responsesUrl}/responses`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/responses')
  async getResponses(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${responsesUrl}/responses`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
    }

  @Get('/responses/:id')
  async getResponse(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${responsesUrl}/responses/:id`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
    }

  @Get('/responses/quiz/:quizId')
  async getQuiz(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${responsesUrl}/responses/quiz/:quizId`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
    }

  @Get('/results/quiz=:quizId/course=:courseId')
  async getResultsCourse(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${responsesUrl}/results/quiz=:quizId/course=:courseId`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
    }

  @Get('/results/quiz/:quizId')
  async getResultsQuiz(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${responsesUrl}/results/quiz/:quizId`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
    }

  @Delete('/responses/:id')
  async deleteResponse(
    @CurrentUser() user: { id, role }) {
      request
        .delete(`${responsesUrl}/responses/:id`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
  }

  @Delete('/responses/quizzes/:quizId')
  async deleteResponseQuiz(
    @CurrentUser() user: { id, role }) {
      request
        .delete(`${responsesUrl}/responses/quizzes/:quizId`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
  }

  @Delete('/responses/courses/:courseId')
  async deleteResponseCourse(
    @CurrentUser() user: { id, role }) {
      request
        .delete(`${responsesUrl}/responses/courses/:courseId`)
        .set({'X_USER_ID': user.id, 'X_USER_ROLE': user.role})
        .catch(err => alert(err))
  }
}
