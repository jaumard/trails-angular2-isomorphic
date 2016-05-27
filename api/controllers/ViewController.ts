'use strict'

import {Request, Response} from 'express'
import * as Controller from 'trails-controller'

module.exports = class ViewController extends Controller {
  helloWorld(req: Request, res: Response) {
    res.status(200).send('Hello Trails.js !')
  }
}
