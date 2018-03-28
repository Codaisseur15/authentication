import {
  JsonController,
  Post,
  Get,
  CurrentUser,
  Patch,
  Delete,
  Put
} from "routing-controllers";
import * as request from "superagent";
import User from "../users/entity";

const usersUrl = process.env.USERS_URL || "http://localhost:3008";

@JsonController()
export default class QuizzesController {
  //post:/users
  @Post("/users")
  async postUsers(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }

  //get:/users/:id
  @Get("/users/:id")
  async getUsersId(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }

  //get:/users
  @Get("/users")
  async getUsers(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }

  //put:/users/:id
  @Put("/users/:id")
  async putUsersId(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }

  //patch:/users/:id
  @Patch("/users/:id")
  async patchUsersId(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }

  @Delete("/users/:id")
  async deleteUsersId(@CurrentUser() user: { id; role }) {
    request
      .get(`${usersUrl}/users/:id`)
      .set({ "x-user-id": user.id, "x-user-role": user.role })
      .catch(err => alert(err));
  }
}
