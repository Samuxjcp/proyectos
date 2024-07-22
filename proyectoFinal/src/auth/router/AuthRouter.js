const { Router } = require("express")
const { login } = require("../controller/login")

const router = Router()

router.post("/auth/login", login)

module.exports = router