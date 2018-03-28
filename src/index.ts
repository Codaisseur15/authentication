import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Action } from "routing-controllers";
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
// import "reflect-metadata";
//import * as Koa from 'koa'

const port = process.env.PORT || 4008;

const app = createKoaServer({
  cors: true,
  controllers: [LoginController, UserController],

  authorizationChecker: async (action: Action, roles: string[]) => {
    const token = action.request.headers["authorization"];

    const user = await User.findOneById(User, token);
    if (user && !roles.length) return true;
    if (user && roles.find(role => user.role.indexOf(role) !== -1))
      return true;

    return false;
  }

  // currentUserChecker: async (action: Action) => {
  //   const header: string = action.request.headers.authorization;
  //   if (header && header.startsWith("Bearer ")) {
  //     const [, token] = header.split(" ");
  //
  //     if (token) {
  //       const { id } = verify(token);
  //
  //       return User.findOneById(id);
  //     }
  //   }
  //   return undefined;
  // }
})

const server = new Server(app.callback())
export const io = IO(server)

io.use(
  socketIoJwtAuth.authenticate({ secret }, async (payload, done) => {
    const user = await User.findOneById(payload.id);
    if (user) done(null, user);
    else done(null, false, `Invalid JWT user ID`);
  })
);

io.on("connect", socket => {
  const name = socket.request.user.firstName;
  console.log(`User ${name} just connected`);

  socket.on("disconnect", () => {
    console.log(`User ${name} just disconnected`);
  });
});

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch(err => console.error(err));
