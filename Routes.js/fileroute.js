const route = require("express").Router()

const regController = require("../controller/Registration")

route.post("/register",regController)

module.exports = route