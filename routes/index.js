const express = require("express")
const router = express.Router()

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" })
})

router.use("/users", require("./users"))
router.use("/comment", require("./comment"))

module.exports = router