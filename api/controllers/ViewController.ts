'use strict'

import {Request, Response} from 'express'
import Controller from 'trails-controller'

export default class ViewController extends Controller {
  helloWorld(req: Request, res: Response) {
    res.status(200).send('Hello Trails.js !')
  }
}
