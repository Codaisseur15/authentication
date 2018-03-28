import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Action, BadRequestError } from "routing-controllers";
import setupDb from "./db";
import LoginController from "./login/controller";
import { verify } from "./jwt";
import * as IO from "socket.io";
import * as socketIoJwtAuth from "socketio-jwt-auth";
import { secret } from "./jwt";
import "reflect-metadata";
import UserController from "./users/controller";
import User from "./users/entity";
import { Server } from "http";
import QuizzesController from "./routes/quizzes";
import * as proxy from "koa-proxies";

const port = process.env.PORT || 4007;

export const app = createKoaServer({
  cors: true,
  controllers: [LoginController, UserController],

  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");

      try {
        return !!(token && verify(token));
      } catch (e) {
        throw new BadRequestError(e);
      }
    }
    return false;
  },

  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");

      if (token) {
        const { id, role } = verify(token);

        return { id, role };
      }
    }
    return undefined;
  }
});

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch(err => console.error(err));
