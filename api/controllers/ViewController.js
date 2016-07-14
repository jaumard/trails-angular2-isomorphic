'use strict'

const Controller = require('trails-controller')

const ng2 = require('@angular/core')
const ng2U = require('angular2-universal')
const ng2Router = require('@angular/router')
const ngApp = require('../../dist/app/app')
const ngRoutes = require('../../dist/app/app.routes')

ng2.enableProdMode()

module.exports = class ViewController extends Controller {
  ng(req, res) {
    const options = {
      directives: [ngApp.AppComponent],

      platformProviders: [
        ng2.provide(ng2U.ORIGIN_URL, {useValue: 'http://localhost:3000'}),
        ng2.provide(ng2U.BASE_URL, {useValue: '/'})

      ].concat(ng2U.NODE_HTTP_PROVIDERS, ng2U.NODE_LOCATION_PROVIDERS),

      providers: [
        ng2Router.provideRouter(ngRoutes.routes),
        ng2.provide(ng2U.REQUEST_URL, {useValue: req.originalUrl || '/'}),
        ng2U.NODE_PLATFORM_PIPES,
        ng2U.NODE_ROUTER_PROVIDERS,
        ng2U.NODE_HTTP_PROVIDERS
      ],

      data: {},

      async: true,

      beautify: true,
      preboot: {buffer: false, debug: true, uglify: false}//FIXME if buffer = true app is not launched anymore after rendering
    }

    res.render('index', options)
  }
}
