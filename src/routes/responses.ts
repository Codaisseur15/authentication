import { JsonController, Post, Get, CurrentUser, Delete, Body } from 'routing-controllers'
import * as request from 'superagent'

const responsesUrl = process.env.RESPONSES_URL || 'http://localhost:4001'

@JsonController()
  export default class ResponsesController {

  @Post('/responses')
  async postResponses(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .post(`${responsesUrl}/responses`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/responses')
  async getResponses(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .get(`${responsesUrl}/responses`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/responses/:id')
  async getResponse(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .get(`${responsesUrl}/responses/:id`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/responses/quiz/:quizId')
  async getQuiz(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .get(`${responsesUrl}/responses/quiz/:quizId`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/results/quiz=:quizId/course=:courseId')
  async getResultsCourse(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .get(`${responsesUrl}/results/quiz=:quizId/course=:courseId`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/results/quiz/:quizId')
  async getResultsQuiz(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .get(`${responsesUrl}/results/quiz/:quizId`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Delete('/responses/:id')
  async deleteResponse(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .delete(`${responsesUrl}/responses/:id`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
  }

  @Delete('/responses/quizzes/:quizId')
  async deleteResponseQuiz(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .delete(`${responsesUrl}/responses/quizzes/:quizId`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
  }

  @Delete('/responses/courses/:courseId')
  async deleteResponseCourse(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      return request
        .delete(`${responsesUrl}/responses/courses/:courseId`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
  }
}
