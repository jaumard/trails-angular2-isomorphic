'use strict'

const Controller = require('trails-controller')

const ng2 = require('@angular/core')
const ng2U = require('angular2-universal')
ng2.enableProdMode()

const PACKAGES = {
  'angular2-universal/polyfills': {
    format: 'cjs',
    main: 'dist/polyfills',
    defaultExtension: 'js'
  },
  'angular2-universal': {
    format: 'cjs',
    main: 'dist/browser/index',
    defaultExtension: 'js'
  },
  '@angular/core': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/router-deprecated': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/platform-browser': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/platform-browser-dynamic': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/http': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/common': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/compiler': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  }
};
module.exports = class ViewController extends Controller {
  helloWorld(req, res) {
    const todoApp = require('../../dist/src/todo/app')
    let queryParams = ng2U.queryParamsToBoolean(req.query);
    let options = Object.assign(queryParams , {
      // client url for systemjs
      buildClientScripts: true,
      systemjs: {
        componentUrl: 'src/todo/browser',
        map: {
          'angular2-universal': 'node_modules/angular2-universal',
          '@angular': 'node_modules/@angular'
        },
        packages: PACKAGES
      },
      directives: [todoApp.TodoApp],
      platformProviders: [
        ng2.provide(ng2U.ORIGIN_URL, {useValue: 'http://localhost:3000'}),
        ng2.provide(ng2U.BASE_URL, {useValue: '/todo'}),
      ],
      providers: [
        ng2.provide(ng2U.REQUEST_URL, {useValue: req.originalUrl})
      ].concat(ng2U.NODE_HTTP_PROVIDERS, ng2U.NODE_ROUTER_PROVIDERS),
      data: {},
      async: queryParams.async !== false,
      preboot: queryParams.preboot === false ? null : {debug: true, uglify: false}

    });

    res.render('todo/index', options);
  }
}
