import {
  JsonController,
  Post,
  Get,
  CurrentUser,
  Body,
  Patch,
  Delete
} from "routing-controllers";
import * as request from "superagent";

const quizzesUrl = process.env.QUIZZES_URL || "http://localhost:4008";

@JsonController()
export default class QuizzesController {
  @Get("/quizzes")
  async getQuizzes(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .get(`${quizzesUrl}/quizzes`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Get("/quizzes/:id")
  async getQuizzesId(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .get(`${quizzesUrl}/quizzes/:id`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Post("/quizzes")
  async postQuizzes(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .post(`${quizzesUrl}/quizzes`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Patch("/quizzes")
  async patchQuizzes(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .patch(`${quizzesUrl}/quizzes`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Delete("/quizzes/:id")
  async deleteQuizzes(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .delete(`${quizzesUrl}/quizzes/:id`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }
}
