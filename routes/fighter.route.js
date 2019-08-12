const express = require('express')
const Router = express.Router()
const {
  getFighterController,
  getFighterByNameController,
  createFighterController
} = require('../controller/fighter.controller.js')

Router.get('/getFighter', getFighterController)
Router.get('/getFighterId', getFighterByNameController)
Router.post('/createFighter', createFighterController)

module.exports = Router
