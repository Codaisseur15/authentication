import { JsonController, Post, Get, CurrentUser, Patch } from 'routing-controllers'
import * as request from 'superagent'

const webhooksUrl = process.env.WEBHOOKS_URL || 'http://localhost:4002'

@JsonController()
export default class WebhookController {

  @Post('/targets')
  async postTargets(
    @CurrentUser() user: { id, role }) {
      request
        .post(`${webhooksUrl}/targets`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Post('/events')
  async postEvents(
    @CurrentUser() user: { id, role }) {
      request
        .post(`${webhooksUrl}/events`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/targets')
  async getTargets(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${webhooksUrl}/targets`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/targets/:id')
  async getTarget(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${webhooksUrl}/targets/:id`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/events')
  async getEvent(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${webhooksUrl}/events`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/events/sent')
  async getSentEvents(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${webhooksUrl}/events/sent`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Get('/events/failed')
  async getFailedEvents(
    @CurrentUser() user: { id, role }) {
      request
        .get(`${webhooksUrl}/events/failed`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }

  @Patch('/targets/:id')
  async patchTarget(
    @CurrentUser() user: { id, role }) {
      request
        .patch(`${webhooksUrl}/targets/:id`)
        .set({'x-user-id': user.id, 'x-user-role': user.role})
        .catch(err => alert(err))
    }
}
