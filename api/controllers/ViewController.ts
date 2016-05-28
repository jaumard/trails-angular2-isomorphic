'use strict'

import {Request, Response} from 'express'
import * as Controller from 'trails-controller'
// Angular 2 Universal
import {
  provide,
  enableProdMode,
  expressEngine,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal'

// Application
import {App} from '../../src/app/app.component'

enableProdMode()

module.exports = class ViewController extends Controller {
  ng(req: Request, res: Response) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    let config: ExpressEngineConfig = {
      directives: [ App ],
      platformProviders: [
        provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
        provide(BASE_URL, {useValue: baseUrl}),
      ],
      providers: [
        provide(REQUEST_URL, {useValue: url}),
        NODE_ROUTER_PROVIDERS,
        NODE_HTTP_PROVIDERS,
      ],
      async: true,
      preboot: false // { appRoot: 'app' } // your top level app component selector
    };

    res.render('index', config);
  }
}
