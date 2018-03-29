import { JsonController, Post, Get, CurrentUser, Patch, Body } from 'routing-controllers'
import * as request from 'superagent'

const webhooksUrl = process.env.WEBHOOKS_URL || 'http://localhost:4008'

@JsonController()
export default class WebhookController {

  @Post('/targets')
  async postTargets(
    @CurrentUser() user : { id, role },
    @Body() body: object
  ) {
      return request
        .post(`${webhooksUrl}/targets`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Post('/events')
  async postEvents(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      request
        .post(`${webhooksUrl}/events`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/targets')
  async getTargets(
    @CurrentUser() user: { id, role }
  ) {
      request
        .get(`${webhooksUrl}/targets`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/targets/:id')
  async getTarget(
    @CurrentUser() user: { id, role }
  ) {
      request
        .get(`${webhooksUrl}/targets/:id`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/events')
  async getEvent(
    @CurrentUser() user: { id, role }
  ) {
      request
        .get(`${webhooksUrl}/events`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/events/sent')
  async getSentEvents(
    @CurrentUser() user: { id, role }
  ) {
      request
        .get(`${webhooksUrl}/events/sent`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .catch(err => {
          return { message: err.message }
        })
    }

  @Get('/events/failed')
  async getFailedEvents(
    @CurrentUser() user: { id, role }
  ) {
      request
        .get(`${webhooksUrl}/events/failed`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .catch(err => {
          return { message: err.message }
        })
    }

  @Patch('/targets/:id')
  async patchTarget(
    @CurrentUser() user: { id, role },
    @Body() body: object
  ) {
      request
        .patch(`${webhooksUrl}/targets/:id`)
        .set({'x-user-id': user.id || null, 'x-user-role': user.role || null})
        .send(body)
        .then(res => res.body)
        .catch(err => {
          return { message: err.message }
        })
    }
}
