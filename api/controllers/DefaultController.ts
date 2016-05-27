'use strict'

import {Request, Response} from 'express'
import * as Controller from 'trails-controller'

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */
module.exports = class DefaultController extends Controller {
  app: any;
  /**
   * Return some info about this application
   */
  info(req: Request, res: Response) {
    res.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }
}
