import {
  JsonController,
  Post,
  Get,
  CurrentUser,
  Patch,
  Delete,
  Put,
  Body,
} from "routing-controllers";
import * as request from "superagent";

const usersUrl = process.env.USERS_URL || "http://localhost:3008";

@JsonController()
export default class UsersController {

  @Post("/users")
  async postUsers(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .post(`${usersUrl}/users`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
      }

  @Get("/users/:id")
  async getUsersId(@CurrentUser() user: { id; role }) {
    return request
      .get(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .catch(err => {
        return { message: err.message };
      });
  }

  @Get("/users")
  async getUsers(@CurrentUser() user: { id; role }) {
    return request
      .get(`${usersUrl}/users`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .catch(err => {
        return { message: err.message };
      });
  }

  @Put("/users/:id")
  async putUsers(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .put(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Patch("/users/:id")
  async patchUsers(@CurrentUser() user: { id; role }, @Body() body: object) {
    return request
      .patch(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id || null, "x-user-role": user.role || null })
      .send(body)
      .then(res => res.body)
      .catch(err => {
        return { message: err.message };
      });
  }

  @Delete("/users/:id")
  async deleteUsersId(@CurrentUser() user: { id; role }) {
    request
      .delete(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }
}
