/// <reference path="typings/main.d.ts" />
import 'reflect-metadata';
/**
 * @module server
 *
 * Start up the Trails Application.
 */

'use strict'

const app = require('./')
const TrailsApp = require('trails')
const server = new TrailsApp(app)

server.start().catch((err: any) => server.stop(err))
